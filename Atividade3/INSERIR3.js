const database = 'bd3_atv3' ;
use(database) ;
db['bd3_atv3_produtos'].insertMany([ 
        {
          "nome": "Mouse Gamer RGB",
          "valor": 1590.13,
          "estoque": 79,
          "fabricante": "Kingston",
          "categoria": "Componentes",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Teclado Mecânico ABNT2",
          "valor": 193.12,
          "estoque": 92,
          "fabricante": "Acer",
          "categoria": "Monitores",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Monitor 24'' Full HD",
          "valor": 1077.6,
          "estoque": 91,
          "fabricante": "Corsair",
          "categoria": "Monitores",
          "descricao": "Experiência imersiva com excelente som e imagem."
        },
        {
          "nome": "SSD 500GB",
          "valor": 697.53,
          "estoque": 70,
          "fabricante": "Acer",
          "categoria": "Áudio",
          "descricao": "Tecnologia avançada com baixo consumo."
        },
        {
          "nome": "HD Externo 1TB",
          "valor": 351.39,
          "estoque": 20,
          "fabricante": "Logitech",
          "categoria": "Móveis",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Fone Bluetooth",
          "valor": 1334.86,
          "estoque": 61,
          "fabricante": "Redragon",
          "categoria": "Componentes",
          "descricao": "Tecnologia avançada com baixo consumo."
        },
        {
          "nome": "Webcam Full HD",
          "valor": 2913.08,
          "estoque": 53,
          "fabricante": "Samsung",
          "categoria": "Componentes",
          "descricao": "Perfeito para o dia a dia e uso profissional."
        },
        {
          "nome": "Headset Gamer",
          "valor": 1733.5,
          "estoque": 96,
          "fabricante": "Logitech",
          "categoria": "Componentes",
          "descricao": "Tecnologia avançada com baixo consumo."
        },
        {
          "nome": "Placa-mãe B550",
          "valor": 2916.97,
          "estoque": 64,
          "fabricante": "Xiaomi",
          "categoria": "Áudio",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Memória RAM 8GB",
          "valor": 2257.8,
          "estoque": 76,
          "fabricante": "Logitech",
          "categoria": "Celulares",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Carregador Portátil 10.000mAh",
          "valor": 122.9,
          "estoque": 13,
          "fabricante": "Logitech",
          "categoria": "Áudio",
          "descricao": "Design moderno e compatível com diversos dispositivos."
        },
        {
          "nome": "Cabo USB-C 1m",
          "valor": 2850.76,
          "estoque": 64,
          "fabricante": "Seagate",
          "categoria": "Móveis",
          "descricao": "Perfeito para o dia a dia e uso profissional."
        },
        {
          "nome": "Notebook i5 8GB",
          "valor": 1320.75,
          "estoque": 90,
          "fabricante": "Sony",
          "categoria": "Áudio",
          "descricao": "Perfeito para o dia a dia e uso profissional."
        },
        {
          "nome": "Impressora Wi-Fi",
          "valor": 2383.23,
          "estoque": 45,
          "fabricante": "Multilaser",
          "categoria": "Componentes",
          "descricao": "Leve, portátil e com ótima eficiência energética."
        },
        {
          "nome": "Celular Android 128GB",
          "valor": 2860.93,
          "estoque": 8,
          "fabricante": "Intelbras",
          "categoria": "Monitores",
          "descricao": "Compatível com Windows, Mac e Linux."
        },
        {
          "nome": "Caixa de Som Bluetooth",
          "valor": 714.51,
          "estoque": 23,
          "fabricante": "Samsung",
          "categoria": "Componentes",
          "descricao": "Experiência imersiva com excelente som e imagem."
        },
        {
          "nome": "Adaptador HDMI-VGA",
          "valor": 2471.25,
          "estoque": 26,
          "fabricante": "ASUS",
          "categoria": "Áudio",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Cadeira Gamer Reclinável",
          "valor": 207.02,
          "estoque": 8,
          "fabricante": "JBL",
          "categoria": "Periféricos",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Processador Ryzen 5",
          "valor": 2492.74,
          "estoque": 10,
          "fabricante": "Logitech",
          "categoria": "Acessórios",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Cooler Fan RGB",
          "valor": 147.98,
          "estoque": 56,
          "fabricante": "Razer",
          "categoria": "Celulares",
          "descricao": "Perfeito para o dia a dia e uso profissional."
        },
        {
          "nome": "Hub USB 4 portas",
          "valor": 2459.96,
          "estoque": 43,
          "fabricante": "Sony",
          "categoria": "Redes",
          "descricao": "Compatível com Windows, Mac e Linux."
        },
        {
          "nome": "Pen Drive 64GB",
          "valor": 2719.51,
          "estoque": 21,
          "fabricante": "Xiaomi",
          "categoria": "Armazenamento",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Fonte 500W",
          "valor": 2819.61,
          "estoque": 13,
          "fabricante": "Multilaser",
          "categoria": "Móveis",
          "descricao": "Experiência imersiva com excelente som e imagem."
        },
        {
          "nome": "Gabinete com LED",
          "valor": 2669.82,
          "estoque": 74,
          "fabricante": "ASUS",
          "categoria": "Áudio",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Roteador Dual Band",
          "valor": 1378.27,
          "estoque": 24,
          "fabricante": "Intelbras",
          "categoria": "Componentes",
          "descricao": "Leve, portátil e com ótima eficiência energética."
        },
        {
          "nome": "Suporte para Notebook",
          "valor": 1804.3,
          "estoque": 54,
          "fabricante": "Samsung",
          "categoria": "Periféricos",
          "descricao": "Compatível com Windows, Mac e Linux."
        },
        {
          "nome": "Controle sem Fio",
          "valor": 544.0,
          "estoque": 99,
          "fabricante": "ASUS",
          "categoria": "Periféricos",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Smartwatch Tela 1.3''",
          "valor": 2236.19,
          "estoque": 51,
          "fabricante": "Sony",
          "categoria": "Armazenamento",
          "descricao": "Perfeito para o dia a dia e uso profissional."
        },
        {
          "nome": "Microfone Condensador",
          "valor": 271.15,
          "estoque": 15,
          "fabricante": "Logitech",
          "categoria": "Móveis",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Estabilizador 500VA",
          "valor": 2021.43,
          "estoque": 60,
          "fabricante": "JBL",
          "categoria": "Áudio",
          "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
          "nome": "Notebook Gamer RTX3050",
          "valor": 441.91,
          "estoque": 13,
          "fabricante": "JBL",
          "categoria": "Monitores",
          "descricao": "Tecnologia avançada com baixo consumo."
        },
        {
          "nome": "Celular 5G 256GB",
          "valor": 1821.18,
          "estoque": 22,
          "fabricante": "Xiaomi",
          "categoria": "Monitores",
          "descricao": "Design moderno e compatível com diversos dispositivos."
        },
        {
          "nome": "HD SSD NVMe 1TB",
          "valor": 109.48,
          "estoque": 12,
          "fabricante": "Intelbras",
          "categoria": "Armazenamento",
          "descricao": "Design moderno e compatível com diversos dispositivos."
        },
        {
          "nome": "Adaptador Bluetooth USB",
          "valor": 2501.82,
          "estoque": 76,
          "fabricante": "Kingston",
          "categoria": "Periféricos",
          "descricao": "Leve, portátil e com ótima eficiência energética."
        },
        {
          "nome": "Tripé para Celular",
          "valor": 2039.83,
          "estoque": 74,
          "fabricante": "Corsair",
          "categoria": "Celulares",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Case HD Externo",
          "valor": 1949.0,
          "estoque": 98,
          "fabricante": "Logitech",
          "categoria": "Áudio",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Base Cooler Notebook",
          "valor": 444.99,
          "estoque": 52,
          "fabricante": "Multilaser",
          "categoria": "Redes",
          "descricao": "Ideal para gamers e profissionais exigentes."
        },
        {
          "nome": "Placa de Vídeo RTX 4060",
          "valor": 224.37,
          "estoque": 9,
          "fabricante": "Sony",
          "categoria": "Monitores",
          "descricao": "Tecnologia avançada com baixo consumo."
        },
        {
          "nome": "Memória RAM 16GB",
          "valor": 582.6,
          "estoque": 28,
          "fabricante": "Kingston",
          "categoria": "Componentes",
          "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
          "nome": "Scanner Portátil",
          "valor": 1735.81,
          "estoque": 50,
          "fabricante": "Intelbras",
          "categoria": "Acessórios",
          "descricao": "Experiência imersiva com excelente som e imagem."
        },
        {
          "nome": "Tablet Android 10''",
          "valor": 504.08,
          "estoque": 23,
          "fabricante": "Redragon",
          "categoria": "Armazenamento",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Monitor Ultrawide",
          "valor": 2734.83,
          "estoque": 16,
          "fabricante": "Kingston",
          "categoria": "Armazenamento",
          "descricao": "Experiência imersiva com excelente som e imagem."
        },
        {
          "nome": "Teclado sem Fio",
          "valor": 2521.54,
          "estoque": 83,
          "fabricante": "Razer",
          "categoria": "Armazenamento",
          "descricao": "Design moderno e compatível com diversos dispositivos."
        },
        {
          "nome": "Mouse sem Fio",
          "valor": 1841.54,
          "estoque": 37,
          "fabricante": "Logitech",
          "categoria": "Componentes",
          "descricao": "Compatível com Windows, Mac e Linux."
        },
        {
          "nome": "Fone com Cancelamento de Ruído",
          "valor": 586.73,
          "estoque": 64,
          "fabricante": "Dell",
          "categoria": "Celulares",
          "descricao": "Produto original com garantia de fábrica."
        },
        {
          "nome": "Webcam 2K",
          "valor": 2043.3,
          "estoque": 72,
          "fabricante": "Razer",
          "categoria": "Componentes",
          "descricao": "Design moderno e compatível com diversos dispositivos."
        },
        {
          "nome": "Suporte de Celular Veicular",
          "valor": 741.82,
          "estoque": 18,
          "fabricante": "ASUS",
          "categoria": "Armazenamento",
          "descricao": "Alta durabilidade e performance garantida."
        },
        {
          "nome": "Bateria Recarregável",
          "valor": 971.71,
          "estoque": 14,
          "fabricante": "Razer",
          "categoria": "Componentes",
          "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
          "nome": "Amplificador de Sinal Wi-Fi",
          "valor": 886.7,
          "estoque": 45,
          "fabricante": "Samsung",
          "categoria": "Componentes",
          "descricao": "Leve, portátil e com ótima eficiência energética."
        },
        {
          "nome": "Cartão SD 128GB",
          "valor": 2952.37,
          "estoque": 94,
          "fabricante": "Corsair",
          "categoria": "Monitores",
          "descricao": "Compatível com Windows, Mac e Linux."
        }
])