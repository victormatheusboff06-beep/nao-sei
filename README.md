extends AnimatableBody3D

@export var player: CharacterBody3D
@export var interaction_distance := 2.5
@export var close_time := 3.0

var is_open := false

@onready var animation_player = $AnimationPlayer

func _process(_delta):
	if player == null:
		return

	var distance = global_position.distance_to(player.global_position)

	if distance <= interaction_distance:
		if Input.is_action_just_pressed("interact") and not is_open:
			abrir_porta()

func abrir_porta():
	is_open = true
	animation_player.play("open")

	await get_tree().create_timer(close_time).timeout

	animation_player.play("close")
	is_open = false
