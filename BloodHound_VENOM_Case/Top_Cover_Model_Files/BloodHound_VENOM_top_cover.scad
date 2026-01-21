/* [Case] */
// Case Length in mm
length = 60.0;
// Case Width in mm
width = 45.3;
// Case Height in mm
height = 2.5;
// Case Wall Width
wall = 0;
// Screw Size in mm
screw = 2.0;

/* [OLED Cutout] */
oled_length = 35;
oled_width = 37;

/* [General] */
// Higher definition curves
$fs=0.01;
$fn=50;

// Source: https://gist.github.com/groovenectar/92174cb1c98c1089347e
module roundedcube(size = [1, 1, 1], center = false, radius = 0.5, apply_to = "all") {
	// If single value, convert to [x, y, z] vector
	size = (size[0] == undef) ? [size, size, size] : size;

	translate_min = radius;
	translate_xmax = size[0] - radius;
	translate_ymax = size[1] - radius;
	translate_zmax = size[2] - radius;

	diameter = radius * 2;

	module build_point(type = "sphere", rotate = [0, 0, 0]) {
		if (type == "sphere") {
			sphere(r = radius);
		} else if (type == "cylinder") {
			rotate(a = rotate)
			cylinder(h = diameter, r = radius, center = true);
		}
	}

	obj_translate = (center == false) ?
		[0, 0, 0] : [
			-(size[0] / 2),
			-(size[1] / 2),
			-(size[2] / 2)
		];

	translate(v = obj_translate) {
		hull() {
			for (translate_x = [translate_min, translate_xmax]) {
				x_at = (translate_x == translate_min) ? "min" : "max";
				for (translate_y = [translate_min, translate_ymax]) {
					y_at = (translate_y == translate_min) ? "min" : "max";
					for (translate_z = [translate_min, translate_zmax]) {
						z_at = (translate_z == translate_min) ? "min" : "max";

						translate(v = [translate_x, translate_y, translate_z])
						if (
							(apply_to == "all") ||
							(apply_to == "xmin" && x_at == "min") || (apply_to == "xmax" && x_at == "max") ||
							(apply_to == "ymin" && y_at == "min") || (apply_to == "ymax" && y_at == "max") ||
							(apply_to == "zmin" && z_at == "min") || (apply_to == "zmax" && z_at == "max")
						) {
							build_point("sphere");
						} else {
							rotate = 
								(apply_to == "xmin" || apply_to == "xmax" || apply_to == "x") ? [0, 90, 0] : (
								(apply_to == "ymin" || apply_to == "ymax" || apply_to == "y") ? [90, 90, 0] :
								[0, 0, 0]
							);
							build_point("cylinder", rotate);
						}
					}
				}
			}
		}
	}
}

module draw_base() {
    difference() {
        roundedcube([width, length, height], false, 1.25, "z");
    }
}

module draw_screw_holes() {
    _height = height + wall + 4;
    _diameter_small = screw + 0.25;
    _diameter_big = screw + 0.75;
    _diameter_bigger = screw + 3.75;
    
    _x = 2.5;
    _y = 2.5;
    _z = _height/2 - wall;
    _z2 = 0.6;//0.8; resin
    
    translate([_x, _y, _z]) {
        cylinder(h=_height, d=_diameter_big, center=true);
        
        translate([-0.5, -0.5, _z2])
            cylinder(h=_height, d=_diameter_bigger, center=true);
    }

    translate([width-_x, _y, _z]) {
        cylinder(h=_height, d=_diameter_big, center=true);
        
        translate([0.5, -0.5, _z2])
            cylinder(h=_height, d=_diameter_bigger, center=true);
    }

    translate([_x, length-_y, _z]) {
        cylinder(h=_height, d=_diameter_big, center=true);
        
        translate([-0.5, 0.5, _z2])
            cylinder(h=_height, d=_diameter_bigger, center=true);
    }

    translate([width-_x, length-_y, _z]) {
        cylinder(h=_height, d=_diameter_big, center=true);
        
        translate([0.5, 0.5, _z2])
            cylinder(h=_height, d=_diameter_bigger, center=true);
    }
}

module draw_oled_cutout() {
    translate([width/2-oled_width/2-0.01, 0, -0.01])
        cube([oled_width, oled_length+0.01, height+0.02]);
}

module draw_button_cutout() {
    button_size = 7;
    
    btn_lx = width - 6.4 - button_size/2;
    btn_ly = length - 12 - button_size/2;
    
    btn_rx = width - 22.2 - button_size/2;
    btn_ry = length - 12 - button_size/2;
    
    btn_ux = width - 14.3 - button_size/2;
    btn_uy = length - 19.5 - button_size/2;
    
    btn_dx = width - 14.3 - button_size/2;
    btn_dy = length - 4.5 - button_size/2;
    
    btn_ax = 5.5 - button_size/2;
    btn_ay = length - 15 - button_size/2;
    
    btn_bx = 13 - button_size/2;
    btn_by = length - 7 - button_size/2;
    
    _z = -1; // 0 resin
    
    translate([btn_lx, btn_ly, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([-1, 0, _z])
            cube([button_size+2, button_size, height+0.02]);
    }
    
    translate([btn_rx, btn_ry, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([-1, 0, _z])
            cube([button_size+2, button_size, height+0.02]);
    }
    
    translate([btn_ux, btn_uy, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([-1, 0, _z])
            cube([button_size+2, button_size, height+0.02]);
    }
        
    translate([btn_dx, btn_dy, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([-1, 0, _z])
            cube([button_size+2, button_size, height+0.02]);
    }
        
    translate([btn_ax, btn_ay, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([0, -1, _z])
            cube([button_size, button_size+2, height+0.02]);
    }
        
    translate([btn_bx, btn_by, -0.01]) {
        cube([button_size, button_size, height+0.02]);
        
        translate([0, -1, _z])
            cube([button_size, button_size+2, height+0.02]);
    }
}

module draw_led_cutout() {
    led_size = 6;
    led_height = 2;//3 resin
    
    led_x = 17 - led_size/2;
    led_y = length - 20.9 - led_size/2;
    
    translate([led_x, led_y, -0.01]) {
        cube([led_size, led_size, led_height]);
        
        translate([-1, 0, 0/*-1*/])
            cube([led_size+2, led_size, led_height]);
    }
}

module draw_oled_protector(){
    oled_width_plus = oled_width+2;
    oled_length_plus = oled_length+1;
    
    _x1 = width/2-(oled_width_plus)/2;
    _x2 = width/2-oled_width/2;
    
    difference() {
        translate([_x1, 0, 1])
            roundedcube([oled_width_plus, oled_length_plus, 4], false, 1, "z");
        
        translate([_x2, 0, 0.99])
            cube([oled_width, oled_length, 5.02]);
    }
}

difference() {
    union() {
        draw_base();
        draw_oled_protector();
    }
    #draw_screw_holes();
    draw_oled_cutout();
    draw_button_cutout();
    draw_led_cutout();
}
