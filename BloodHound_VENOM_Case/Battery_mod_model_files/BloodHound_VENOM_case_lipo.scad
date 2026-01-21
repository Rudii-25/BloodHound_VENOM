/* [Case] */
// Case Length in mm
length = 60.0;
// Case Width in mm
width = 45.3;
// Case Height in mm
height = 10;//8.5;//5.98
// Case Wall Width
wall = 1.4;
// Screw Size in mm
scew = 2.0;

/* [D1 Mini] */
// D1 Mini Width in mm
wemos_length = 34.8;
// D1 Mini Width in mm
wemos_width = 24.0;
// D1 Mini Y-Position
wemos_y = 7.5;
// USB Cutout Height in mm
wemos_cutout_height = 7.1;//6.8;//4.5

/* [OLED Pin Cutout] */
// OLED Pin Row Length in mm
oled_length = 3.7;
// OLED Pin Row Width in mm
oled_width = 10.0;

/* [On/Off Switch] */
sw_x = 6;
sw_width = 10 + 1;
sw_height = 2.5;

/* [Battery holder] */
cutout_width = width - wall*2;
cutout_length = width*0.5 + 4;
bat_height = 6;
bat_overhang = 0.5;
overhang_height = 1;
    
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
        roundedcube([width, length, height], false, 2, "zmin");
        
        translate([wall, wall, wall])
            cube([width-(wall*2), (length-wall*2), height+0.01-wall]);
    }
}

module draw_screw_holder() {
    _height = height-wall;
    _diameter_big = 3.6;
    
    
    _x = 2.5;
    _y = 2.5;
    _z = _height/2 + wall;
    
    translate([_x, _y, _z]) {
        cylinder(h=_height, d=_diameter_big, center=true);
    }
    
    translate([width-_x, _y, _z])
        cylinder(h=_height, d=_diameter_big, center=true);
    
    translate([_x, length-_y, _z])
        cylinder(h=_height, d=_diameter_big, center=true);
    
    translate([width-_x, length-_y, _z])
        cylinder(h=_height, d=_diameter_big, center=true);
}

module draw_screw_holes() {
    _height = height-wall;
    _diameter_small = scew - 0.25;
    _diameter_big = scew + 0.25;
    
    _x = 2.5;
    _y = 2.5;
    _z = _height/2 + wall;
    
    translate([_x, _y, _z]) {
        translate([0,0,_height-1])
            cylinder(h=_height, d=_diameter_big, center=true);
        cylinder(h=_height, d=_diameter_small, center=true);
    }

    translate([width-_x, _y, _z]) {
        translate([0,0,_height-1])
            cylinder(h=_height, d=_diameter_big, center=true);
        cylinder(h=_height, d=_diameter_small, center=true);
    }

    translate([_x, length-_y, _z]) {
        translate([0,0,_height-1])
            cylinder(h=_height, d=_diameter_big, center=true);
        cylinder(h=_height, d=_diameter_small, center=true);
    }

    translate([width-_x, length-_y, _z]) {
        translate([0,0,_height-1])
            cylinder(h=_height, d=_diameter_big, center=true);
        cylinder(h=_height, d=_diameter_small, center=true);
    }
}

module draw_wemos_cutout() {
    #translate([wall, wemos_y, wall])
        cube([/*wall*/wemos_length-wall, wemos_width, height-wall]);
    
    #translate([0, wemos_y, height-wemos_cutout_height])
        cube([/*wall*/wall, wemos_width, wemos_cutout_height]);
}

module draw_oled_cutout() {
    #translate([width/2-oled_width/2, 1, wall])
        cube([oled_width, oled_length, height+0.01-wall]);
}

module draw_sw_cutout() {
    translate([width-sw_x-sw_width,0,height-sw_height])
        cube([sw_width, wall, sw_height]);
}

module draw_bat_pcb_cutout() {
    #translate([width-wall, 18.5, height-7])
        cube([wall/2, 11, 7]);
}

// ===== Battery ===== //
module draw_bat_cutout() {
    translate([wall,length - cutout_length - wall - 2.9,0])
        cube([cutout_width,cutout_length,wall+0.01]);
}

module draw_bat_holder() {
    holder_width = cutout_width-0.4;
    overhang_width = (holder_width-wall)/6;
    
    overhang_lx = wall*4;
    overhang_mx = (holder_width - overhang_width)/2;
    overhang_rx = holder_width - overhang_width - overhang_lx;
    
    overhang_dist = wall + 0.4;
    
    overhang_z1 = bat_height - overhang_height;
    overhang_z2 = overhang_z1 - overhang_height - overhang_dist;
    
    translate([width+6,length - cutout_length - wall - 2.9,0]) {
        difference() {
            
            union() {
                // main
                roundedcube([holder_width, cutout_length, bat_height], false, 1, "zmin");
                
                // overhang L
                translate([overhang_lx, -bat_overhang, overhang_z1])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
                
                translate([overhang_lx, -bat_overhang, overhang_z2])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
                
                // overhang M
                translate([overhang_mx, -bat_overhang, overhang_z1])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
                
                translate([overhang_mx, -bat_overhang, overhang_z2])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
                
                // overhang R
                translate([overhang_rx, -bat_overhang, overhang_z1])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
                
                translate([overhang_rx, -bat_overhang, overhang_z2])
                    cube([overhang_width,cutout_length+bat_overhang*2, 1]);
            }
            
            // cutout
            #translate([wall/2, wall/2, wall*0.75 ])
                cube([holder_width-wall, cutout_length-wall, bat_height]);
        }
        
    }
}

module draw_bat_stop() {
    holder_width = (cutout_length-wall)/4;
    holder_ly = length - holder_width - wall - 2.9 - wall;
    holder_ry = length - cutout_length - 2.9;
    holder_offset = 0.2;
    holder_z = wall + holder_offset + overhang_height;
    
    // stop L
    translate([wall, holder_ly, holder_z])
        cube([bat_overhang, holder_width, wall]);
    
    translate([width-wall-bat_overhang, holder_ly, holder_z])
        cube([bat_overhang, holder_width, wall]);
    
    // stop R
    translate([wall, holder_ry, holder_z])
        cube([bat_overhang, holder_width, 1]);
    
    translate([width-wall-bat_overhang, holder_ry, holder_z])
        cube([bat_overhang, holder_width, 1]);
}

// ===== Render ===== //

difference() {
    union() {
        draw_base();
        draw_screw_holder();
        draw_bat_stop();
    }
    draw_screw_holes();
    draw_wemos_cutout();
    draw_sw_cutout();
    draw_bat_pcb_cutout();
    draw_bat_cutout();
}

draw_bat_holder();

