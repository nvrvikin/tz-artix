import BaseLayout from "@/app/layouts/BaseLayout"

function About() {
  return (
    <BaseLayout>
        <section className="about">
            <h1 className="about__title">Описание задания</h1>
            <p className="about__description">В верхней части экрана расположено два инпута<br />
                Количество элементов (далее <code>count</code>)<br />
                Интервал времени появления элементов в секундах (далее <code>interval</code>)<br />
                Под ними расположен список карточек. В  начальный момент времени список  пуст.<br />
                <br />
                Периодически в соответствии со значением <code>interval</code> в списке появляется <code>count</code> карточек. Для каждой карточки цвет фона (далее <code>bgСolor</code>) и время до исчезновения (далее <code>countdown</code>) определяются случайным образом. При этом <code>countdown</code> находиться в интервале от 2 до 10 секунд.<br />
                <br />
                Карточка представляет из себя прямоугольник с заданным цветом фона (<code>bgСolor</code>), надписью с hex-кодом цвета фона (<code>bgСolor</code>) и элементом визуализирующим обратный отсчет (<code>countdown</code>). Если с момента монтирования карточки прошло больше времени чем <code>countdown</code>, то карточка исчезает из списка.<br />
                При клике на карточку <code>countdown</code> обновляется.<br />
                <br />
                Требования:<br />
                Использовать <a href="https://react.dev">React</a><br />
                Использовать <a href="https://www.typescriptlang.org">TypeScript</a><br />
                Исходный код проекта должен быть выложен на <a href="https://github.com/nvrvikin/tz-artix">GitHub</a> и опубликован с помощью <a href="https://nvrvikin.github.io/tz-artix/">GitHub Pages</a><br />
                Будет плюсом если проект будет следовать <a href="https://feature-sliced.github.io/documentation/ru/">FSD</a> методологии.<br />
                Внешний вид на ваше усмотрение.<br />
            </p>
        </section>
    </BaseLayout>
  )
}

export default About