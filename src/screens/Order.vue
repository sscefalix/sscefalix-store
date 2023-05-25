<script setup lang="ts">
import CustomSection from "../components/CustomSection.vue";
import CustomLink from "../components/CustomLink.vue";
</script>

<template>
  <CustomSection margin-top="75" :title="true" background-title="Закажите сейчас" section-title="Как заказать услугу">
    <details class="details">
      <summary>Перед заказом вам нужно составить полное ТЗ(Техническое задание), где будет описаны все ваши пожелания по
        поводу заказа
      </summary>
      <p>
        Пример: Здравствуйте, я по поводу сайта. Мне нужен корпоративный сайт для студии по продаже сборок в майнкрафт.<br>
        Основные цвета: ораньжевый и очень тёмный. Текста, картинки и все необходимые файлы предоставлю в следующем
        сообщении.<br><br>
        Нужно 4 страницы:<br>
        Главная страница, где будет рассказываться о нашей студии,<br>
        Страница со статистикой и отзывами,<br>
        Страница для заказа,<br>
        Страница с примерами работ<br>
      </p>
    </details>
    <details class="details">
      <summary>Всё прочитали?
      </summary>
      <p>
        После того, как вы ознкомились с тем, что такое ТЗ, и подготовили его, вам нужно написать мне в DISCORD<br><br>
        <CustomLink to="/discord">Написать</CustomLink>
        <br><span style="color: var(--card-color)">.</span>
      </p>
    </details>
  </CustomSection>
</template>

<style scoped>
.details {
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 12px 12px 0;
  margin-bottom: 20px;
}
.details summary {
  cursor: pointer;
  font-weight: 500;
  margin: -12px -12px 0;
  padding: 12px;
}
.details[open] {
  padding: 12px;
}
.details[open] summary {
  border-bottom: 1px solid var(--primary-color);
  margin-bottom: 12px;
}
.details p {
  white-space: pre-line;
}
</style>