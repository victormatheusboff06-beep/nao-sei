var _key_left = keyboard_check(vk_left) || keyboard_check(ord("A"));
var _key_right = keyboard_check(vk_right) || keyboard_check(ord("D"));
var _key_jump = keyboard_check_pressed(vk_space);


var _move = _key_right - _key_left;
hspd = _move * spd;


if (!place_meeting(x, y + 1, obj_parede)) {
    vspd += grav;
} else {
    vspd = 0; 
    
     
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

spd = 4;
grav = 0.5;
jump_force = -10;

hspd = 0;
vspd = 0;

inimigo codigo

spd = 2;
direcao = 1;

x += spd * direcao;

if (place_meeting(x + direcao, y, obj_parede))
{
    direcao *= -1;
}

if (place_meeting(x, y, obj_inimigo))
{
    show_message("Você morreu!");
    room_restart();
}

if (place_meeting(x, y + 1, obj_inimigo) && vspd > 0)
{
    var inimigo = instance_place(x, y + 1, obj_inimigo);

    if (inimigo != noone)
    {
        instance_destroy(inimigo);
        vspd = -8;
    }
}
