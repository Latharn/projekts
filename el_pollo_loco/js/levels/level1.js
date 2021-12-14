let backgroundsX = 0;

let level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()

    ],
    [
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png')
    ],
    [
        new Background('img/5.Fondo/Capas/5.cielo_1920-1080px.png', backgroundsX),
        new Background('img/5.Fondo/Capas/3.Fondo3/1.png', backgroundsX),
        new Background('img/5.Fondo/Capas/2.Fondo2/1.png', backgroundsX),
        new Background('img/5.Fondo/Capas/1.suelo-fondo1/1.png', backgroundsX),
        new Background('img/5.Fondo/Capas/5.cielo_1920-1080px.png', backgroundsX + 1199),
        new Background('img/5.Fondo/Capas/3.Fondo3/2.png', backgroundsX + 1199),
        new Background('img/5.Fondo/Capas/2.Fondo2/2.png', backgroundsX + 1199),
        new Background('img/5.Fondo/Capas/1.suelo-fondo1/2.png', backgroundsX + 1199)
    ],
    [
        new Statusbar('img/7.Marcadores/Barra/Marcador vida/verde/100_.png')
    ],
    [
        new Bottle('img/7.Marcadores/Icono/Botella.png'),
        new Bottle('img/7.Marcadores/Icono/Botella.png'),
        new Bottle('img/7.Marcadores/Icono/Botella.png'),
        new Bottle('img/7.Marcadores/Icono/Botella.png'),
        new Bottle('img/7.Marcadores/Icono/Botella.png')

    ],
    [
        new Bottlebar('img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png')
    ],
    [

    ],
    [
        new Coins('img/8.Coin/Moneda2.png'),
        new Coins('img/8.Coin/Moneda2.png'),
        new Coins('img/8.Coin/Moneda2.png'),
        new Coins('img/8.Coin/Moneda2.png'),
        new Coins('img/8.Coin/Moneda2.png')
    ],
    [
        new Coinsbar('img/7.Marcadores/Barra/Marcador moneda/azul/0_.png')
    ],
    [
        new GameOver()
    ]

);



