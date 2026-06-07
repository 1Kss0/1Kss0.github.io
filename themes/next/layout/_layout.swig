<!DOCTYPE html>
<html lang="{{ config.language }}">
<head>
  {{ partial('_partials/head/head.swig', {}, {cache: theme.cache.enable}) }}
  {% include '_partials/head/head-unique.swig' %}
  {{- next_inject('head') }}
  <title>{% block title %}{% endblock %}</title>
  {{ partial('_third-party/analytics/index.swig', {}, {cache: theme.cache.enable}) }}
  {{ partial('_scripts/noscript.swig', {}, {cache: theme.cache.enable}) }}
</head>

<body itemscope itemtype="http://schema.org/WebPage">
  <div class="container{%- if theme.motion.enable %} use-motion{%- endif %}">
    <div class="headband"></div>

    <header class="header" itemscope itemtype="http://schema.org/WPHeader">
      <div class="header-inner">{% include '_partials/header/index.swig' %}</div>
    </header>

    {{ partial('_partials/widgets.swig', {}, {cache: theme.cache.enable}) }}

    <main class="main">
      <div class="main-inner">
        <div class="content-wrap">
          {% include '_partials/header/sub-menu.swig' %}
          <div class="content {% block class %}{% endblock %}">
            {% block content %}{% endblock %}
          </div>
          {% include '_partials/comments.swig' %}
        </div>
        {%- if theme.sidebar.display !== 'remove' %}
          {% block sidebar %}{% endblock %}
        {%- endif %}
      </div>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        {% include '_partials/languages.swig' %}
        {{ partial('_partials/footer.swig', {}, {cache: theme.cache.enable}) }}
        {{ partial('_third-party/statistics/index.swig', {}, {cache: theme.cache.enable}) }}
      </div>
    </footer>
  </div>

  {{ partial('_scripts/index.swig', {}, {cache: theme.cache.enable}) }}
  {{ partial('_third-party/index.swig', {}, {cache: theme.cache.enable}) }}

  {%- if theme.pjax %}
    <div id="pjax">
  {%- endif %}
  {% include '_third-party/math/index.swig' %}
  {% include '_third-party/quicklink.swig' %}

  {{- next_inject('bodyEnd') }}
  {%- if theme.pjax %}
    </div>
  {%- endif %}
  <!-- 全站右上角悬浮动图 - 链接版 -->
<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRscjV3OG40ODI0NDd2MjhiNG4ybmQ5a3VpeXBrdHFqdmxqMnBtcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q3J5xe18ZEOVZqWA8x/giphy.gif" class="global-corner-gif" alt="Corner Gif">

<style>
    .global-corner-gif {
        position: fixed;      /* 固定定位 */
        top: 20px;            /* 距离顶部 */
        right: 20px;          /* 距离右侧 */
        width: 150px;         /* 宽度 */
        height: auto;         /* 高度自动 */
        z-index: 9999;        /* 顶层显示 */
        pointer-events: none; /* 鼠标穿透（不挡点击） */
        opacity: 0.9;         /* 透明度 */
        border-radius: 10px;  /* 圆角 */
        box-shadow: 0 4px 10px rgba(0,0,0,0.3); /* 阴影 */
    }
    /* 手机端自动变小 */
    @media (max-width: 768px) {
        .global-corner-gif {
            width: 80px;
            top: 10px;
            right: 10px;
        }
    }
</style>
</body>
</html>
