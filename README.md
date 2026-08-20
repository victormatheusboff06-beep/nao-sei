extends AnimatableBody3D

@export var player: CharacterBody3D
@export var interaction_distance := 2.5

var is_open := false

@onready var animation_player = $AnimationPlayer

func _process(_delta):
	if player == null:
		return

	var distance = global_position.distance_to(player.global_position)

	if distance <= interaction_distance:
		if Input.is_action_just_pressed("interact"):
			if is_open:
				animation_player.play("close")
				is_open = false
			else:
				animation_player.play("open")
				is_open = true
