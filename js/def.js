import { category, item, waAPI } from "./main.js";

waAPI.countryCode = +57; // COUNTRY CODE
waAPI.number = 3176510514; // PHONE NUMBER
item.currency = "es-co"; // LOCALE CURRENCY

category.add("Esaladas", "Ensaladas");
item.add("Grande (# 01)", "Deliciosa combinacion de frutas crema queso y dos porciones de helado.", 14000, "grande.png", "Ensaladas");
item.add("Mediana (# 02)", "Deliciosa combinacion de frutas crema queso y una porcion de helado.", 12000, "mediana.png", "Ensaladas");
item.add("Pequeña (# 03)", "Deliciosa combinacion de frutas crema queso y una porcion de helado.", 11000, "pequena.png", "Ensaladas");
item.add("Natural + cereal (# 04)", "Deliciosa combinacion de frutas cortadas en cuadritos + granola.", 9000, "naturalCereal.png", "Ensaladas");
item.add("Natural (# 05)", "Deliciosa combinacion de frutas cortadas en cuadritos.", 8000, "natural.png", "Ensaladas");
item.add("Super grande (Llevar) (# 06)", "Deliciosa combinacion de frutas cortadas en cuadritos, crema queso y dos porciones de helado.", 16000, "Ensalada16k.png", "Ensaladas");
item.add("Extra grande (Llevar) (# 07)", "Deliciosa combinacion de frutas cortadas en cuadritos, crema queso y dos porciones de helado.", 18000, "Ensalada18k.png", "Ensaladas");

category.add("Infantil", "infantil");
item.add("Copa alegria (# 08)", "Tres porciones de helado, crema, gelatina, barquillo, gomas, choco disck y grageas de colores.", 9000, "alegria.png", "infantil");
item.add("Gusanito (# 09)", "Tres sabores de helado, salsa de chocolate, gomas, choco disck y grageas de colores.", 9000, "gusanito.png", "infantil");
item.add("Payasito (# 10)", "Dos porciones de helado, cono de galleta, barquillo, gomas, choco disck y grageas de colores.", 8000, "payaso.png", "infantil");
item.add("Medusa (# 11)", "Canasta de galleta, una porción grande de helado, gomas, choco-disck y galleta oreo.", 7000, "medusa.png", "infantil");
item.add("Ratoncito (# 12)", "Dos porciones de helado, gomas, choco disck y grageas  de  colores.", 7000, "ratoncito.png", "infantil");
item.add("Junior (# 13)", "Tres porciones de helado, crema, gomas, choco disck, grageas de colores y galleta tipo wafer.", 9000, "junior.png", "infantil");
item.add("Buho (# 14)", "Delicioso búho con masmelos, helado, crema chantilly, galletas oreo,grajeas de colores .", 7000, "buho.png", "infantil");
item.add("Barco Pirata (# 15)", "Tres porciones de helado, crema chantilly, barquillos, galletas wafer, salsa de chocolate y chips de colores.", 9000, "barco.png", "infantil");
item.add("Mini Brownie (# 16)", "Una porción de helado, brownie, crema chantilly, galleta rellena de chocolate salsa de frutos rojos, salsa de chocolate, y pops de chocolate.", 8000, "miniBrownie.png", "infantil");
item.add("Mundo Magico (# 17)", "Dos sabores de helado, crema chantilly, muchas gomas, salsa de frutos rojos, salsa de kiwi y chips de colores..", 8000, "mundoMagico.png", "infantil");

category.add("Especiales", "especiales");
item.add("Fantasia (# 18)", "Deliciosa combinación de kiwi,mango,fresa,gelatina,una porción grande de helado,crema,salsa de mora y barquillo.", 10000, "fantasia.png", "especiales");
item.add("Frutty Helado (# 19)", "Deliciosa combinación de fresas, durazno, gelatina tres porciones de helado, kiwi, cereza, chantilly, barquillo y salsa de frutos rojos.", 13000, "fruttyHelado.png", "especiales");
item.add("Tornado de sabores (# 20)", "Deliciosa combinación de Mango, kiwi, fresas, uvas Durazno en almíbar, cerezas, yogurt, queso, zucaritas y una porción de helado.", 11000, "tornado.png", "especiales");
item.add("Sensacion (# 21)", "Tres porciones de helado, fresa,kiwi, mango, uvas, crema, cerezas y galletas Wafers.", 11000, "sensacion.png", "especiales");
item.add("Peach-Melba (# 22)", "Duraznos en almíbar, tres porciones de helado, crema, queso, salsa de mora y galletas Wafers.", 12000, "peach_melba.png", "especiales");
item.add("Choco-Fresa (# 23)", "Deliciosa combinación de salsa de chocolate, dos porciones de helado, delicadas fresas, trocitos de brownie con crema chantilly", 11000, "choco_fresa.png", "especiales");
item.add("Fresas con crema (# 24)", "Deliciosas fresas con crema, una bola de helado grande y barquillo.", 11000, "fresas.png", "especiales");
item.add("Exotica (# 25)", "Helado de mora y mandarina, con rodajas de kiwi, trocitos de mango, manzana y fresa, con un toque de licor de almendras, adornada con crema chantilly, galleta y cereza..", 10000, "exotica.png", "especiales");
item.add("Almond chocolatl (# 26)", "Helado de chocolate con un toque de licor de almendras salsa de chocolate, crema chantilly, nueces picadas, barquillos y fresa.", 9000, "almond.png", "especiales");
item.add("Oreo en crema (# 27)", "Dos porciones de helado, crema chantilly, galletas Oreo, salsa de frutos rojos y barquillos.", 10000, "oreo.png", "especiales");
item.add("Copa Nutella (# 28)", "Exquisita combinación de crema de chocolate y avellanas con banano y deliciosa salsa de chocolate acompañados de un sabor de helado y crema chantilly.", 10000, "nutella.png", "especiales");
item.add("Copa Acida (# 29)", "Incomparable copa ácida: Helado de maracuyá, pulpa de lulo,  y  maracuyá,  leche condensada, crema chantilly y crocante barquillo .", 10000, "acida.png", "especiales");

category.add("Copas con helado", "copas");
item.add("Happy Birthday (# 30)", "Dos porciones de helado crema chantilly, fresas, salsas de kiwi y frutos rojos decorada con muchas gomas.", 8000, "happy.png", "copas");
item.add("Maracumango (# 31)", "Deliciosa combinación de mango, pulpa fresca de maracuya, dos porciones de helado, salsa y crema chantilly.", 10000, "maracumango.png", "copas");
item.add("Gelatina (# 32)", "Deliciosa combinación de gelatina con crema, helado salsa y galletas tipo Wafers.", 8000, "gelatina.png", "copas");
item.add("Explosion de chocolate (# 33)", "Deliciosa salsa de chocolate, tres porciones de helado de chocolate, galletas mini chips y barquillo.", 9000, "explosion.png", "copas");
item.add("Brownie con helado (# 34)", "Delicioso brownie con, dos porciones de helado, crema, gelatina, galletas mini chips, salsa y barquillo.", 9000, "brownie.png", "copas");
item.add("Copa Seduccion (# 35)", "Tres porciones de helado, Crema, queso, salsa de mora, barquillo y chips de chocolate.", 9000, "seduccion.png", "copas");

category.add("Variedad", "variedad");
item.add("Banana Split (# 36)", "Tres porciones de helado, banano, kiwi, fresa, mango, gelatina, crema, barquillo y salsa de chocolate.", 10000, "banana.png", "variedad");
item.add("Cholao con helado (# 37)", "Hielo granizado con cerezas leche condensada, pulpa de maracuya, mango, fresas, kiwi, una porción de helado, salsa de frutos rojos y galleta crocante.", 8000, "cholao.png", "variedad");
item.add("Canasta estrella (# 38)", "Canasta de galleta con tres porciones de helado, crema, gelatina, kiwi, durazno, fresa y barquillo.", 9000, "canasta.png", "variedad");
item.add("Conchita (# 39)", "Canasta de galleta con dos porciones de helado, crema, gelatina, kiwi, mango, fresa y galletas tipo wafers.", 7500, "conchita.png", "variedad");
item.add("Brownie caliente (# 40)", "Delicioso Brownie caliente dos sabores de helado crema chantilly salsa de chocolate y barquillos.", 9000, "brownie_caliente.png", "variedad");
item.add("Salpicon sin helado (# 41)", "", 5000, "salpicon_sin_h.png", "variedad");
item.add("Salpicon con helado (# 42)", "", 6000, "salpicon_h.png", "variedad");
item.add("Salpicon grande sin helado (# 43)", "", 7000, "salpiconGrande.png", "variedad");
item.add("Salpicon grande con helado (# 44)", "", 8000, "salpiconGrandeHelado.png", "variedad");
item.add("Cono sencillo (# 45)", "", 3000, "cono_sencillo.png", "variedad");
item.add("Cono doble (# 46)", "", 5000, "cono_doble.png", "variedad");
item.add("Vaso Helado x 1 bola (# 47)", "", 2000, "1bola.jpg", "variedad");
item.add("Vaso Helado x 2 bolas (# 48)", "", 4000, "2bolas.jpg", "variedad");
item.add("Vaso Helado x 3 bolas (# 49)", "", 6000, "3bolas.jpg", "variedad");
item.add("Vaso Helado x 4 bolas (# 50)", "", 8000, "4bolas.jpg", "variedad");

category.add("Waffles", "waffles");
item.add("Waffle corazon de melon (# 51)", "Delicioso Waffle con durazno, kiwi, arequipe crema chantilly, salsa de chocolate, milo, helado de caramelo o de su elección.", 12000, "wcorazon.png", "waffles");
item.add("Waffle fresa banano (# 52)", "Delicioso Wafe con fresas, banano, arequipe crema chantilly, salsa de chocolate, milo, helado de su elección.", 12000, "wfresa-banano.png", "waffles");
item.add("Waffle sensaciones (# 53)", "Deliciosa combinación de Nutella, arequipe, queso, con fresas, banano, mango, durazno, crema chantilly, salsa de chocolate, milo, helado de caramelo  o  de  su  elección.", 14000, "wsensaciones.png", "waffles");

category.add("Bebidas", "bebidas");
item.add("Bolsa agua x360ml (# 54)", "", 500, "bolsa.png", "bebidas");
item.add("Botella agua x600ml (# 55)", "", 2000, "botellaAgua.jpg", "bebidas");
item.add("Jugo natural En Leche (# 56)", "Guanábana, Maracuyá, Naranja, Tomate, Borojó, Frésa, Móra, Lúlo, Uva", 7000, "jugoLeche.png", "bebidas");
item.add("Jugo natural En Agua (# 57)", "Guanábana, Maracuyá, Naranja, Tomate, Borojó, Frésa, Móra, Lúlo, Uva", 6000, "jugoAgua.png", "bebidas");
item.add("Granizado (# 58)", "Maracuyá, Cerezada, Naranja, Limon, Fresa, Uva", 8000, "granizado.png", "bebidas");
item.add("Malteada Grande (# 59)", "", 12000, "malteadaG.png", "bebidas");
item.add("Malteada Pequeña (# 60)", "", 10000, "malteadaP.png", "bebidas");
item.add("Borojo Vitaminado (# 61)", "", 9000, "Borojo.png", "bebidas");
item.add("Batido de frutos rojos (# 62)", "", 9000, "Batido.png", "bebidas");
item.add("Frappe Grande (# 63)", "Milo, Cafe, Oreo", 10000, "frappeG.png", "bebidas");
item.add("Frappe pequeño (# 64)", "", 7000, "frappeP.png", "bebidas");
item.add("Limonada en agua(# 65)", "", 6000, "limonada.jpg", "bebidas");
item.add("Limonada en soda (# 66)", "", 7000, "limonada.jpg", "bebidas");
item.add("Milo (# 67)", "", 9000, "milo.png", "bebidas");
item.add("Milo con banano (# 68)", "", 9500, "milo.png", "bebidas");