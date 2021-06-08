# Memory v1.0

Плагин позволяет создавать Игру Memory
Развивающюю память

## Быстрый старт

### Установка

Загрузите таблицу стилей и JS

#### HTML

Поместите  таблицу стилей на [вверху]:

```html
<style>
        .memory img{
            display: block;
            width: 100%;
            object-fit: cover;
        }

        .memory .item {
            position: relative;
        }

        .memory .cover{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ddd;
        }
</style>
```

или перенесите этот код в ваши стили:

...css

        .memory img{
            display: block;
            width: 100%;
            object-fit: cover;
        }

        .memory .item {
            position: relative;
        }

        .memory .cover{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ddd;
        }
...

Поместите скрипты в нижнюю часть: 

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/memoryGame.js"></script>
```

### Использование
1. Добавьте в структуру элемент контейнера 

```HTML
<div id="your-id" class="memory"></div>
```

** ПРИМЕЧАНИЕ. ** Класс "memory" зарезервирован для стилей.
** ПРИМЕЧАНИЕ. ** Вы можете использовать другой класс или id. В таком случае при подключении плагина необходимо указать соответствующий класс.

2. Вызовите метод pluginMemory под подключеными скриптами

Пример вызова:
```html
    <script>
        $(function(){
            $('#wrap-memory').pluginMemory({
                quantity: 4,
                time: 2000,
                margin: 10,
                img: 'images/back.jpg',
            });
        })
    </script>
```

## Опции
   1. quantity
      Количесво колонок

      type: number
      default: 5
      Поддерживаемые значения от 1 до 5.


   2. time
      Время задержки перед поворотом карточки в милисекундах.
      
      type: number,
      default: 1000
      Только положительные значения.

    3. margin
       Отступы между карточками в пикселях.

       type: number,
       default: 2
       Только положительные значения.

    
    4. img(не обязтельное)
       Задняя сторона карточки.

       type: string,
       default: ''
       Полный путь от корневого файла.

