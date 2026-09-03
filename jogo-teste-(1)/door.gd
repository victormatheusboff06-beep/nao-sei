extends AnimatableBody3D

@export_category("Configurações")
@export var tempo_aberta := 2.5

@export_category("Nós Obrigatórios")
@export var interaction_manager: Node  # Arraste o seu InteractionManager aqui
@export var animation_player: AnimationPlayer
@export var interaction_area: Area3D
@export var collision_shape: CollisionShape3D


var esta_aberta := false
var em_movimento := false
var jogador_dentro := false

func _ready() -> void:
	# Garante que os nós foram configurados no Inspetor
	if not interaction_area or not animation_player or not interaction_manager:
		push_error("ERRO: Esqueceu de arrastar os nós no Inspetor da porta!")
		return
		
	# Conecta os sinais de forma limpa e segura
	interaction_area.body_entered.connect(_on_body_entered)
	interaction_area.body_exited.connect(_on_body_exited)

func _unhandled_input(event: InputEvent) -> void:
	# Só aceita comando se o jogador estiver na área, e a porta parada/fechada
	if jogador_dentro and not esta_aberta and not em_movimento:
		if event.is_action_pressed("interact"):
			gerenciar_porta()

func gerenciar_porta() -> void:
	esta_aberta = true
	em_movimento = true
	interaction_manager.hide_prompt()
	
	collision_shape.set_deferred("disabled", true)
	animation_player.play("open")
	
	# Esconde o texto da tela imediatamente
	interaction_manager.hide_prompt()
	animation_player.play("open")

	# Espera o tempo dela ficar aberta
	await get_tree().create_timer(tempo_aberta).timeout
	
	# Fecha a porta automaticamente
	animation_player.play("close")
	await animation_player.animation_finished
	
	collision_shape.set_deferred("disabled", false)
	esta_aberta = false
	em_movimento = false
	
	# Se o jogador continuou parado ali na área, mostra o texto de novo
	if jogador_dentro:
		interaction_manager.show_prompt("Aperte E para abrir")

func _on_body_entered(body: Node3D) -> void:
	if body is CharacterBody3D:
		jogador_dentro = true
	if body is CharacterBody3D and not esta_aberta and not em_movimento:
		interaction_manager.show_prompt("Aperte E para abrir")

func _on_body_exited(body: Node3D) -> void:
	if body is CharacterBody3D:
		jogador_dentro = false
		interaction_manager.hide_prompt()
