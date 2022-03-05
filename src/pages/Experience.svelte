<script>
  import Card from "../components/Card.svelte";
  import Label from "../components/Label.svelte";
</script>

<div class="tab-container">
  <h3>Работка в компаниях</h3>
  <Card>
    <div class="d-flex g-20">
      <div class="image" id="abp" />
      <div class="d-flex fd-column g-10">
        <span class="d-flex g-5">
          <a class="name" href="http://abproc.ru/">АБП</a>
          <a class="site" href="http://abproc.ru/">abproc</a>
        </span>
        <span class="desc">Автоматизация бизнесс процессов</span>
        <span class="d-flex g-5">
          <Label>lotusscript</Label>
          <Label>@formula</Label>
          <Label>sql</Label>
          <Label>TestTrail</Label>
        </span>
        <ul class="list">
          <li>Разработка новых фич</li>
          <li>Ручное тестирование системы</li>
          <li>Описание тестовых сценариев в TestRail</li>
        </ul>
      </div>
    </div>
  </Card>
  <Card>
    <div class="d-flex g-20">
      <div class="image" id="eltex" />
      <div class="d-flex fd-column g-10">
        <span class="d-flex g-5">
          <a class="name" href="https://eltex-co.com/">Eltex</a>
          <a class="site" href="https://eltex-co.com/">eltex-co</a>
        </span>
        <span class="desc">Производство телекоммуникационного оборудования</span
        >
        <span class="d-flex g-5">
          <Label>angular</Label>
          <Label>knockout</Label>
          <Label>C</Label>
          <Label>lua</Label>
        </span>
        <ul class="list">
          <li>Разработка UI для оборудования</li>
          <li>Правки в системной части</li>
        </ul>
      </div>
    </div>
  </Card>
  <Card>
    <div class="d-flex g-20">
      <div class="image" id="jw" />
      <div class="d-flex fd-column g-10">
        <span class="d-flex g-5">
          <a class="name" href="https://just-work.org/">JustWork</a>
          <a class="site" href="https://just-work.org/">just-work</a>
        </span>
        <span class="desc">Разработка веб серисов и приложений</span>
        <span class="d-flex g-5">
          <Label>typescript</Label>
          <Label>vue</Label>
          <Label>react</Label>
          <Label>graphql</Label>
        </span>
        <ul class="list">
          <li>Разработка веб сервисов</li>
          <li>Формирование ТЗ и отценка задач</li>
          <li>Ревью кода</li>
          <li>Тестирование функционала</li>
        </ul>
      </div>
    </div>
  </Card>
</div>

<style scoped>
  .image {
    border: 1px solid var(--disable);
    border-radius: 10px;
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
  }
  .name {
    color: var(--active);
    font-weight: 500;
  }
  .site {
    font-weight: 300;
    font-size: 16px;
    color: var(--black800);
  }
  .name:hover,
  .site:hover {
    color: var(--link);
  }
  .desc {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
  }
  .list {
    font-size: 14px;
    line-height: 21px;
    margin-left: 20px;
  }
  #abp {
    background-image: url("http://abproc.ru/img/logo.png");
    background-size: 175px;
  }
  #eltex {
    background-image: url("https://eltex-co.com/local/assets/img/logo-eltex-white.png");
    background-size: 50px;
    background-position: center;
    background-color: #0486c4;
  }
  #jw {
    background-image: url("https://habrastorage.org/getpro/moikrug/uploads/company/100/004/168/3/logo/medium_ac3a5fb6937a7806435e6f0a163b8a4e.png");
    background-size: 60px;
    background-position: center;
  }
</style>
