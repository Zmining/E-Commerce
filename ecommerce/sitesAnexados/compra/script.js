const imagem = document.getElementById("imgLivro")
const desc = document.getElementById("desc")
const autores = document.getElementById("autor")
const precos = document.getElementById("preco")
const titulos = document.getElementById("titulo")

var itemEscolhido = localStorage.getItem("livro")
var index = undefined

const imagensLivro = ["../../imgs/livros/livro1.jpg", "../../imgs/livros/livro2.jfif", "../../imgs/livros/livro3.png", "../../imgs/livros/livro4.jpg"]
const livro = ["Biblioteca da Meia Noite", "Tudo é Rio","É Assim que Acaba", "Os Sete Maridos de Evelyn Hugo"]
const descricao = ['A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo. Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido. Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem? Em A Biblioteca da Meia-Noite , Nora Seed se vê exatamente na situação pela qual todos gostaríamos de poder passar: voltar no tempo e desfazer algo de que nos arrependemos. Diante dessa possibilidade, Nora faz um mergulho interior viajando pelos livros da Biblioteca da Meia-Noite até entender o que é verdadeiramente importante na vida e o que faz, de fato, com que ela valha a pena ser vivida.'
    ,'"Tudo é rio" é o livro de estreia de Carla Madeira. Com uma narrativa madura, precisa e ao mesmo tempo delicada e poética, o romance narra a história do casal Dalva e Venâncio, que tem a vida transformada após uma perda trágica, resultado do ciúme doentio do marido, e de Lucy, a prostituta mais depravada e cobiçada da cidade, que entra no caminho deles, formando um triângulo amoroso. Na orelha do livro, Martha Medeiros escreve: "Tudo é rio é uma obra-prima, e não há exagero no que afirmo. É daqueles livros que, ao ser terminado, dá vontade de começar de novo, no mesmo instante, desta vez para se demorar em cada linha, saborear cada frase, deixar-se abraçar pela poesia da prosa. Na primeira leitura, essa entrega mais lenta é quase impossível, pois a correnteza dos acontecimentos nos leva até a última página sem nos dar chance para respirar. É preciso manter-se à tona ou a gente se afoga. A metáfora do rio se revela por meio da narrativa que flui ora intensa, ora mais branda de forma ininterrupta, mas também por meio do suor, da saliva, do sangue, das lágrimas, do sêmen, e Carla faz isso sem ser apelativa, sem sentimentalismo barato, com a habilidade que só os melhores escritores possuem."'
    ,'O romance mais pessoal da carreira de Colleen Hoover, É assim que acaba discute temas como violência doméstica e abuso psicológico de forma sensível e direta. Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela. Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja? É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos. “Um romance corajoso, de partir o coração, que enfia as garras em você e não te solta… Ninguém escreve sobre sentimentos tão bem quanto Colleen Hoover.” -Anna Todd, autora da série After “…Você vai sorrir em meio às lágrimas.” – Sarah Pekkanen, autora de Perfect Neighbors “Imperdível. Com um drama fascinante e verdades dolorosas, esse livro retrata de maneira poderosa a devastação que o abuso pode causar – e a força de quem sobrevive a ele…”'
    ,'Com todo o esplendor que só a Hollywood do século passado pode oferecer, esta é uma narrativa inesquecível sobre os sacrifícios que fazemos por amor, o perigo dos segredos e o preço da fama. Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas. “Evelyn Hugo faz Elizabeth Taylor parecer sem graça. Você vai rir com ela, chorar, sofrer, e então voltar para a primeira página e fazer tudo de novo.” ― Heather Cocks e Jessica Morgan, autoras de The Royal We']
const autor = ["Matt Haig", "Carla Madeira", "Collean Hoover", "Taylor Jenkins"]
const valor = ["69,90", "59,90", "49,90", "33,90"]


for(var i = 0; i < livro.length; i++){
    if(livro[i] == itemEscolhido){
        index = i
        carregar()
        console.log("")
    }
}

function carregar(){
    imagem.src = imagensLivro[index]
    desc.innerHTML = descricao[index]
    autores.innerHTML = autor[index]
    precos.innerHTML = "R$" + valor[index]
    titulos.innerHTML = livro[index]
}


const compra = document.getElementById("compra")

compra.addEventListener("click", () => {
    localStorage.setItem("livro", itemEscolhido)
    window.location.href = "./finalizarpedido/index.html"
})