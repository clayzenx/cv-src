<script>
  import Image from "../components/Image.svelte";
</script>

<div class="tab-container">
  <div class="d-flex g-20">
    <Image src="https://i.ibb.co/k9BcsQV/IMG-8685.jpg" />

    <div class="d-flex fd-column g-10">
      <div>
        <h2>Владислав</h2>
        <span class="subtitle">Веб-разработчик</span>
      </div>

      <div class="d-flex g-10">
        <a href="https://github.com/clayzenx">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi bi-github svg-icon"
            viewBox="0 0 16 16"
            style="width: 20px; height: 20px;"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
        <a href="tel:+79915049840">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-phone-fill svg-icon"
            viewBox="0 0 16 16"
            style="width: 20px; height: 20px;"
          >
            <path
              d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
            />
          </svg>
        </a>
        <a href="mailto: clay.zenx@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-envelope-fill svg-icon"
            viewBox="0 0 16 16"
            style="width: 20px; height: 20px;"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
            />
          </svg>
        </a>
        <a href="https://xn--r1a.click/clayzenx">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-telegram svg-icon"
            viewBox="0 0 16 16"
            style="width: 20px; height: 20px;"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
            />
          </svg>
        </a>
      </div>

      <div class="d-flex g-3 ai-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-geo-alt-fill svg-icon"
          viewBox="0 0 16 16"
          style="width: 16px; height: 16px; cursor: initial;"
        >
          <path
            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          />
        </svg>
        <span class="small-text">Новосибирск, Россия</span>
      </div>
    </div>
  </div>
  <p class="about-text">
    Люблю веб-разработку за возможность создавать сервисы упрощающую нашу жизнь.
    Уделяю должное внимание дизайну, простоте и отзывчивости пользовательских
    интерфейсов и стремлюсь разрабатывать не только полезные но и красивые
    реализации ваших и своих идей
  </p>
</div>

<style scoped>
  .about-text {
    margin-top: 5px;
    text-align: justify;
    font-size: 18px;
    font-weight: 300;
    line-height: 27px;
    color: rgb(88, 96, 105);
  }

  .small-text {
    font-size: 14px;
    font-weight: 300;
    color: rgb(88, 96, 105);
  }

  .svg-icon > * {
    fill: var(--light);
  }

  .svg-icon:hover > * {
    fill: var(--hover);
  }
</style>
