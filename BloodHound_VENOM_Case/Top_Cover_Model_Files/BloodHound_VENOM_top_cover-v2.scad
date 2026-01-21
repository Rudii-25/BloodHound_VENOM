/* [Case] */
// Case Length in mm
length = 59.7;
// Case Width in mm
width = 45.1;
// Case Height in mm
height = 3.6;
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

// !!!!!! <RESIN> !!!!!! //
resin=false;
// !!!!!! </RESIN> !!!!!! //

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

module draw_toblerone(size, height) {
    linear_extrude(height)
        polygon([[0,0],[size,0],[0,size]]);
}

module draw_trapez(width_big, width_small, length, height) {
    diff = (width_big - width_small)/2;
    
    linear_extrude(height)
        polygon([[0,0], [width_big,0], [width_big-diff,length], [diff,length]]);
}

module hackheld3d() {
    color([0.13,0.40,0.98]) {
        translate([174.7, -66.6, -0.8])
            rotate([0,0,180])
                import("/Users/stef/Projects/HackHeld-New/HackHeld Vega II+/HackHeld Vega II+.stl");
    }
}

module draw_base() {
    difference() {
        roundedcube([width, length, height], false, 1.6, "zmax");
    }
}

module draw_screw_holes() {
    _height = height + wall + 4;
    _diameter_big = screw + 0.25;
    _diameter_bigger = screw + 3.75;
    
    _x = 2.5;
    _y = 2.5;
    _z = _height/2 - wall - 0.02;
    _z2 = 1.6 - 0.02;
    
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
    translate([width/2-oled_width/2-0.01, 0, -0.01]) {
        difference() {
            cube([oled_width, oled_length+0.01, height+0.02]);
            
            _offset = 1.2;
            _h=1.6-0.03;
            
            translate([-4+_offset, 1, 0])
                cylinder(h=_h, d=10);
            
            translate([width-4.4-_offset, 1, 0])
                cylinder(h=_h, d=10);
        }
    }
}

module draw_button_cutout() {
    button_bottom_width = 11;
    button_size = 6.6;
    button_height = height + 0.02;
    button_diff = button_bottom_width - button_size;
    
    // LRUD
    lrudx = 0.2;
    lrudy = 0.2;
    
    // Left
    btn_lx = width - 6.6 + lrudx - button_bottom_width/2;
    btn_ly = length - 12.2 + lrudy + button_size/2;
    
    // Right
    btn_rx = width - 22.4 + lrudx - button_bottom_width/2;
    btn_ry = length - 12.2 + lrudy + button_size/2;
    
    // Up
    btn_ux = width - 14.5 + lrudx - button_bottom_width/2;
    btn_uy = length - 19.8 + lrudy + button_size/2;
    
    // Down
    btn_dx = width - 14.5 + lrudx - button_bottom_width/2;
    btn_dy = length - 4.6 + lrudy + button_size/2;
    
    
    // AB
    abx = 0;
    aby = 0.1;
    
    // A
    btn_ax = 5.5 + abx - button_size/2;
    btn_ay = length - 17.3 + aby - button_size/2;
    
    // B
    btn_bx = 13 + abx - button_size/2;
    btn_by = length - 9.3 + aby - button_size/2;
    
    _z = -1;
    
    // Left
    translate([btn_lx, btn_ly, -0.01]) {
        rotate([90,0,0])
            draw_trapez(button_bottom_width, button_size, button_height, button_size);
    }
    
    // Right
    translate([btn_rx, btn_ry, -0.01]) {
        rotate([90,0,0])
            draw_trapez(button_bottom_width, button_size, button_height, button_size);
    }
    
    // Up
    translate([btn_ux, btn_uy, -0.01]) {
        rotate([90,0,0])
            draw_trapez(button_bottom_width, button_size, button_height, button_size);
    }
    
    // Down
    translate([btn_dx, btn_dy-0.2, -0.01]) {
        rotate([90,0,0])
            draw_trapez(button_bottom_width, button_size, button_height, button_size-0.2);
    }
    
    // A
    translate([btn_ax, btn_ay, -0.01]) {
        rotate([90,0,90])
            draw_trapez(button_bottom_width, button_size, button_height, button_size);
    }
    
    // B
    translate([btn_bx, btn_by, -0.01]) {
        rotate([90,0,90])
            draw_trapez(button_bottom_width, button_size, button_height, button_size);
    }
}


module draw_led_cutout() {
    led_size = 5 + 1;           // 5050 package => 5mm + 1mm margin
    led_height = 1.5 + 0.7;     // led cutout hight, enough headroom
    led_width = led_size + 3;   // led width = size + margin for solder points
    
    x = 17 - led_width/2;
    y = length - 20.9 + led_size/2;
    z = -0.01;
    
    w1 = led_width;
    w2 = led_size;
    l = led_size;
    h = led_height;//height + 0.02;
    h2 = height - 0.4;
    
    translate([x,y,z]) rotate([90,0,0]) draw_trapez(w1,w2,h,l);
    
    if(!resin) {
        translate([x+(w1/2), y-(w2/2), z]) cylinder(h=h2, d=4, center=false);
    }
}

module draw_oled_protector(){
    oled_width_plus = oled_width+2.5;
    oled_length_plus = oled_length+1.5;
    
    _x1 = width/2-(oled_width_plus)/2;
    _x2 = width/2-oled_width/2;
    
    _height = 4.6;
    
    difference() {
        translate([_x1, 0, 1])
            roundedcube([oled_width_plus, oled_length_plus, _height], false, 1, "z");
        
        translate([_x2, 0, 0.99])
            cube([oled_width, oled_length, _height+1.02]);
    }
    
    /*
    translate([width-2.8, oled_length+0.6, 3.6])
        rotate([90, 0, 0])
            draw_toblerone(1.3, oled_length-4);
    */
}

difference() {
    union() {
        draw_base();
        draw_oled_protector();
    }
    draw_screw_holes();
    draw_oled_cutout();
    draw_button_cutout();
    draw_led_cutout();
}

%hackheld3d();