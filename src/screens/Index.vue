<script setup lang="ts">

import Button from "../components/CustomLink.vue";
import CustomSection from "../components/CustomSection.vue";
</script>

<template>
  <div class="hero line">
    <div class="websites hero-item">
      <main class="text">
        <h1 class="title">
          Создаём <span class="orange">продающие</span> и <span class="orange">эффективные</span> сайты
        </h1>
        <p class="subtitle">
          Продуктивно решаем задачи клиента
        </p>
      </main>
      <Button to="/order">Заказать сайт</Button>
    </div>
    <div class="and"><h1 class="background-title">и</h1></div>
    <div class="bots hero-item">
      <main class="text">
        <h1 class="title right">
          Создаём <span class="orange">работоспособных</span> и <span class="orange">полезных</span> ботов
        </h1>
        <p class="subtitle right">
          Продуктивно решаем задачи клиента
        </p>
      </main>
      <Button to="/order" class="button right">Заказать бота</Button>
    </div>
  </div>
  <CustomSection margin-top="140" :title="true" background-title="Статистика заказов" section-title="Наша статистика">
    <div class="line">
      <div class="studio">
        <h1 class="studio-title">Студия разработки <span class="orange">SSCEFALIX</span></h1>
        <p class="studio-subtitle">Мы занимаемся разработкой сайтов и ботов по самым низким ценам на рынке!</p>
        <Button to="/order" class="button studio-button">Заказать</Button>
      </div>
      <div class="stats">
        <div class="stats-item" style="background: linear-gradient(45deg, #00C39A 0%, #006A54 100%);">
          <h1 class="stats-item__title">0</h1>
          <p class="stats-item__subtitle">Заказов выполнено</p>
        </div>
        <div class="stats-item" style="background: linear-gradient(215deg, #FFC93E 0%, #81360C 100%);">
          <h1 class="stats-item__title">0</h1>
          <p class="stats-item__subtitle">Положительных отзывов</p>
        </div>
      </div>
    </div>
  </CustomSection>
  <CustomSection margin-top="140" :title="true" background-title="Список наших услуг" section-title="Чем мы занимаемся">
    <div class="services">
      <div class="service">
        <main class="service__title">
          <h1 class="name">Лендинг</h1>
          <p class="description">– Это одностраничный тип сайта, в котором обычно размещают краткую информацию о товаре,
            услуге или мероприятии. Его задача - превращать поситителей в пользователей.</p>
        </main>
        <ul class="details">
          <li><span>Сроки выполнения:</span> 1-3 дня</li>
          <li><span>Стоимость:</span> от 400 р.</li>
        </ul>
        <Button to="/order">Заказать</Button>
      </div>
      <div class="service">
        <main class="service__title">
          <h1 class="name">Корпоративный сайт</h1>
          <p class="description">– Это многостраничный тип сайта, который обычно используется для компаний. В нём
            предусмотрено несколько страниц в которых распологается разная информация, услуги и т.д.</p>
        </main>
        <ul class="details">
          <li><span>Сроки выполнения:</span> 10-30 дней</li>
          <li><span>Стоимость:</span> от 1200 р.</li>
        </ul>
        <Button to="/order">Заказать</Button>
      </div>
      <div class="service">
        <main class="service__title">
          <h1 class="name">Веб приложение (FRONTEND)</h1>
          <p class="description">– Это многостраничный тип сайта, который обычно используется для создания админ панели,
            интернет магазина, и т.п. Данная услуга создана только для интеграции сайта в веб приложения и связь с
            BACKEND’ом</p>
        </main>
        <ul class="details">
          <li><span>Сроки выполнения:</span> 10-30 дней</li>
          <li><span>Стоимость:</span> от 1800 р.</li>
        </ul>
        <Button to="/order">Заказать</Button>
      </div>
      <div class="service">
        <main class="service__title">
          <h1 class="name">Веб приложение (BACKEND)</h1>
          <p class="description">– Это серверная часть сайта, на которой расположена вся логика проекта от регистрации
            до функционала всего сайта. Используется в связке с FRONTEND’ом, есть возможность заказать сразу вместе с
            FRONTEND’ом</p>
        </main>
        <ul class="details">
          <li><span>Сроки выполнения:</span> 10-30 дней</li>
          <li><span>Стоимость:</span> от 2200 р.</li>
        </ul>
        <Button to="/order">Заказать</Button>
      </div>
      <div class="service">
        <main class="service__title">
          <h1 class="name">Боты в DISCORD или TELEGRAM</h1>
          <p class="description">– Автоматические боты в DISCORD или TELEGRAM для выполнения данных им задач, например,
            таких как: магазин в TELEGRAM, приватные комнаты в DISCORD или экономический бот в DISCORD и т.п.</p>
        </main>
        <ul class="details">
          <li><span>Сроки выполнения:</span> зависит от объёма работы</li>
          <li><span>Стоимость:</span> от 600 р.</li>
        </ul>
        <Button to="/order">Заказать</Button>
      </div>
    </div>
  </CustomSection>
</template>

<style scoped>
.line {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero {
    margin-top: 75px;
}

.hero-item {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 400px;
}

.title {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: bold;
    max-width: 400px;
    line-height: 32px;
    color: var(--default-color);
}

.orange {
    color: var(--primary-color);
}

.subtitle {
    margin-top: 10px;
    color: var(--gray-color);
}

.right {
    text-align: right;
    margin-left: auto;
}

.section {
    margin-top: 140px;
}

.studio {
    max-width: 650px;
    width: 100%;
    min-height: 142px;
    height: 100%;
    position: relative;
    background-color: var(--card-color);
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 12px var(--card-color);
}

.studio-title {
    max-width: 250px;
    font-size: 24px;
    font-weight: bold;
}

.studio-subtitle {
    margin-top: 4px;
    max-width: 450px;
    color: var(--gray-color);
}

.studio-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.stats {
    display: flex;
    align-items: center;
    gap: 24px;
}

.stats-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 250px;
    height: 142px;
}

.stats-item__title {
    font-size: 36px;
    font-weight: 600;
}

.stats-item__subtitle {
    color: var(--light-gray-color);
    font-weight: 500;
}

.services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.service {
    border-radius: 4px;
    background-color: var(--card-color);
    box-shadow: 0 0 12px var(--card-color);
    max-width: 600px;
    width: 100%;
    min-height: 370px;
    height: 100%;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.name {
    font-size: 24px;
    font-weight: 600;
}

.description {
    margin-top: 4px;
    max-width: 460px;
    color: var(--gray-color);
}

.details {
    list-style: initial;
    margin-left: 20px;
}

.details li::marker {
    color: var(--primary-color);
}

.details li span {
    font-size: 18px;
    font-weight: bold;
}
</style>