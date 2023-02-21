const pessoas = [
    {
        nome: "Aegon I",
        imagem: "https://sm.ign.com/ign_br/screenshot/default/blob_yp6p.jpg",
        descricao: "1 d.C. a 37 d.C"
    },

    {
        nome: "Aenys I",
        imagem: "http://pm1.narvii.com/6580/fccdcb35c220424c106ae8ae986bea65e3b21fe3_00.jpg",
        descricao: "37 d.C. a 42 d.C"
    },
    {
        nome: "Maegor I",
        imagem: "https://pm1.narvii.com/6617/803c9204016ba09a8c2608e9bb304ad20267c109_hq.jpg",
        descricao: "42 d.C. a 48 d.C"
    },
    {
        nome: "Jaehaerys I",
        imagem: "https://sm.ign.com/ign_br/screenshot/default/a-casa-do-dragao-3_42en.png",
        descricao: "48 d.C. a 103 d.C"
    },

    {
        nome: "Viserys I",
        imagem: "https://64.media.tumblr.com/d9e9a553f3f010788f106aeb882b6312/f040e76c869c3d35-05/s540x810/0e59ad38a8808b78e2c97edb0d8cf10b5ffaa46d.gif",
        descricao: "103 d.C. a 129 d.C"
    },


    {
        nome: "Aegon II",
        imagem: "https://64.media.tumblr.com/ff9a405d2ffba796fd5bbbfe7283d0fd/25b5078f94ade414-ac/s540x810/075c0bfe51f7d327cef07d97a13663ec8561ce03.gif",
        descricao: "129 d.C. a 131 d.C"
    },

    {
        nome: "Aegon III",
        imagem: "http://pm1.narvii.com/7207/2fc34ff68460c567d230ce03dbb3991164ee7b1er1-500-741v2_00.jpg",
        descricao: "131 d.C. a 157 d.C"
    },

    {
        nome: "Daeron I",
        imagem: "https://external-preview.redd.it/RQgdDxLG62hNFCqVU6yQCqzk4nDb-AwcC_rLJdkvPgU.jpg?auto=webp&s=9271423065a39674537ce985c3dc6a92d8914274",
        descricao: "157 d.C. a 161 d.C"
    },

    {
        nome: "Baelor I",
        imagem: "https://pm1.narvii.com/6548/7449701814cd479f9015e4ceb767054e0f9ccdfe_hq.jpg",
        descricao: "161 d.C. a 171 d.C"
    },

    {
        nome: "Viserys II",
        imagem: "http://pm1.narvii.com/6374/8395d860e88157666ca964c8bb421b0e28510044_00.jpg",
        descricao: "171 d.C. a 172 d.C"
    },

    {
        nome: "Aegon IV",
        imagem: "https://pbs.twimg.com/media/E5A2kRYXMAMhJU5.jpg:large",
        descricao: "172 d.C. a 184 d.C"
    },

    {
        nome: "Daeron II",
        imagem: "https://i.pinimg.com/originals/18/a2/6e/18a26ee6a784d0c660fabbd0079dda37.jpg",
        descricao: "184 d.C. a 209 d.C"
    },

    {
        nome: "Aerys I",
        imagem: "https://static1.personality-database.com/profile_images/274ccea5e1aa44d49e45d8658bcf097e.png",
        descricao: "209 d.C. a 221 d.C"
    },

    {
        nome: "Maekar I",
        imagem: "https://i.redd.it/1f0d0g3ggin71.jpg",
        descricao: "221 d.C. a 233 d.C"
    },

    {
        nome: "Aegon V",
        imagem: "https://i.pinimg.com/736x/b7/ef/78/b7ef78588f230d8a52f4ab444b6d519a.jpg",
        descricao: "233 d.C. a 259 d.C"
    },

    {
        nome: "Jaehaerys II",
        imagem: "https://64.media.tumblr.com/88685cfb947b45f0dc2f99d0ce3bfdfb/5933d1398736a3e2-9c/s1280x1920/abb3cdb43d97927457a3c63b2f1b63f9e81287d0.png",
        descricao: "259 d.C. a 262 d.C"
    },

    {
        nome: "Aerys II",
        imagem: "https://cdn.ome.lt/EiZPV7btILLkfboitFptMaFZSgo=/1200x630/smart/extras/conteudos/game-of-thrones_EZjiwfJ.jpg",
        descricao: "262 d.C. a 283 d.C"
    }
];

function buscarNomes() {
    const nomeBusca = document.getElementById("nome").value.trim();
    const listaNomes = document.getElementById("lista-nomes");

    if (nomeBusca === "") {
        listaNomes.innerHTML = "Digite um nome para buscar";
        return;
    }

    listaNomes.innerHTML = " "; // Limpa a lista de nomes

    if (nomeBusca.includes(" ")) {
        // busca por nome completo
        for (let i = 0; i < pessoas.length; i++) {
            if (pessoas[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
                const img = document.createElement("img");
                img.src = pessoas[i].imagem;
                img.alt = pessoas[i].nome;
                const p = document.createElement("p");
                p.appendChild(img);
                p.appendChild(document.createTextNode(pessoas[i].nome + ": " + pessoas[i].descricao));
                listaNomes.appendChild(p);
                break; // para a busca após encontrar um nome correspondente
            }
        }
    } else {
        // busca por parte do nome
        for (let i = 0; i < pessoas.length; i++) {
            if (pessoas[i].nome.toLowerCase().includes(nomeBusca.toLowerCase())) {
                const img = document.createElement("img");
                img.src = pessoas[i].imagem;
                img.alt = pessoas[i].nome;
                const p = document.createElement("p");
                p.appendChild(img);
                p.appendChild(document.createTextNode(pessoas[i].nome + ": " + pessoas[i].descricao));
                listaNomes.appendChild(p);
            }
        }
    }
}