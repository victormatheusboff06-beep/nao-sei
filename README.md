var _key_left = keyboard_check(vk_left) || keyboard_check(ord("A"));
var _key_right = keyboard_check(vk_right) || keyboard_check(ord("D"));
var _key_jump = keyboard_check_pressed(vk_space);


var _move = _key_right - _key_left;
hspd = _move * spd;


if (!place_meeting(x, y + 1, obj_parede)) {
    vspd += grav;
} else {
    vspd = 0; // Zera a velocidade vertical se estiver pisando no chão
    
     
    if (_key_jump) {
        vspd = jump_force;
    }
}


if (place_meeting(x + hspd, y, obj_parede)) {
    while (!place_meeting(x + sign(hspd), y, obj_parede)) {
        x += sign(hspd);
    }
    hspd = 0;
}
x += hspd;


if (place_meeting(x, y + vspd, obj_parede)) {
    while (!place_meeting(x, y + sign(vspd), obj_parede)) {
        y += sign(vspd);
    }
    vspd = 0;
}
y += vspd;
