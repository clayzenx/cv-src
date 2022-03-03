<script>
  import Card from "../components/Card.svelte";
</script>

<div class="tab-container">
  <h3>Работа в компаниях</h3>

  <div id="abp">
    <Card url="http://abproc.ru/">
      <img
        slot="left"
        class="logo"
        src="http://abproc.ru/img/logo.png"
        alt="abproc"
      />

      <ul slot="right" class="list">
        <li class="small-text">
          Разработка информационных систем на платформе "Lotus Notes"
        </li>
        <li class="small-text">Кодирование на lotus script и @формулах</li>
        <li class="small-text">Ручное тестирование и работа с "Test rail"</li>
        <span class="small-text">lotusscript @formula TestRail sql</span>
      </ul>
    </Card>
  </div>

  <div id="eltex">
    <Card url="https://eltex-co.com/">
      <img
        slot="left"
        class="logo"
        src="https://eltex-co.ru/local/assets/img/logo-eltex-white.png"
        alt="eltex-co"
      />

      <ul slot="right" class="list">
        <li class="small-text">
          Разработка UI для телекоммуникационного оборудования
        </li>
        <li class="small-text">Правки и доработки системной части</li>
        <li class="small-text">Ревью кода</li>
        <span class="small-text">c lua angular knockout</span>
      </ul>
    </Card>
  </div>

  <div id="justwork">
    <Card url="https://just-work.org/">
      <img
        slot="left"
        class="logo"
        src="https://hsto.org/getpro/moikrug/uploads/company/100/004/168/3/logo/medium_ac3a5fb6937a7806435e6f0a163b8a4e.png"
        alt="just-work.org"
        style="margin-left: 75px;"
      />

      <ul slot="right" class="list">
        <li class="small-text">Разработка онлайн сервисов</li>
        <li class="small-text">Формирование задач</li>
        <li class="small-text">Ревью кода</li>
        <li class="small-text">Тестирование функционала</li>
        <span class="small-text">react vue typescript graphql</span>
      </ul>
    </Card>
  </div>
</div>

<style scoped>
  #abp {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 15%,
      rgba(245, 245, 245, 1) 75%
    );
    border-radius: 10px;
  }
  #eltex {
    background: linear-gradient(
      90deg,
      rgba(35, 150, 243, 1) 10%,
      rgba(255, 255, 255, 0) 50%
    );
    border-radius: 10px;
  }
  #eltex .logo {
    width: 175px;
    height: auto;
  }
  #justwork {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 40%,
      rgba(184, 75, 0, 0.1) 75%
    );
    border-radius: 10px;
  }
  .logo {
    height: 60px;
  }

  .list {
    width: 50%;
  }

  .list > li {
    color: var(--black800);
  }

  .small-text {
    line-height: 18px;
    color: var(--active);
  }
</style>
