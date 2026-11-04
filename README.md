https://painel.imperiomobile.com/p/baixe-o-apk-pelo-mediafire-agora-cb0ab9

https://drive.google.com/file/d/1vrDL_kZnasOb6nNTjVTfi1MoQJgwKycz/view?usp=drivesdk

https://www.mediafire.com/file/hfknuxhjkxt9rxh/MINECRAFT-BEDROCK-CON-MUSICA-1.26.60-OFICIAL.apk/file

Aqui o link para Roger D.A.
https://canva.link/7nhs4ri0nsa7hkr

const inicio = new Date();
    const div = document.querySelector("div.tempo");
    const inp = document.querySelector(".inp");
    const act = document.querySelector(".act");
    const lst = document.querySelector(".lst");

    let tempoAlvo = null;       
    let alertaDisparado = false; 

    
    setInterval(() => {
      const agora = new Date();
      const time = Math.floor((agora.getTime() - inicio.getTime()) / 1000);

      const minutos = Math.floor(time / 60);
      const segundos = time % 60;
      
      const minFormatado = String(minutos).padStart(2, '0');
      const segFormatado = String(segundos).padStart(2, '0');
      
      div.textContent = `${minFormatado}:${segFormatado}`;

      if (tempoAlvo !== null && time === tempoAlvo && !alertaDisparado) {
        alert(`O tempo de ${tempoAlvo} segundos foi atingido.`);
        alertaDisparado = true; 
      }
    }, 1000);

    act.addEventListener('click', () => {
      const valor = parseInt(inp.value);
      
      if (!isNaN(valor) && valor > 0) {
        tempoAlvo = valor;
        alertaDisparado = false; 

        const li = document.createElement('li');
        li.textContent = `Alerta programado para ${valor} segundos.`;
        lst.appendChild(li);
        
        inp.value = '';
      }
    });
