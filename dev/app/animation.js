/* eslint-disable no-inner-declarations */
if (window.matchMedia('(max-width: 1100px)').matches) {
  console.log('animation - off');
} else {
  console.log('animation - on');
  const controller = new ScrollMagic.Controller();

  function AnimationScene(section, tween) {
    const scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.8,
    })
      .reverse(false)
      // .addIndicators({
      //   colorTrigger: 'white',
      //   colorStart: 'white',
      //   colorEnd: 'white',
      //   indent: 5,
      // })
      .setTween(tween)
      .addTo(controller);
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////
  // секция reprise
  const tl_main_nav = new TimelineMax();
  tl_main_nav.staggerFrom('.main-nav', 0.5, { y: '50%', opacity: 0 });
  tl_main_nav.staggerFrom('.main-header__flex-container', 0.5, { y: '20%', opacity: 0 });
  tl_main_nav.staggerFrom('.best-exchanges', 0.4, { y: '50%', opacity: 0 });
  AnimationScene('.main-header', tl_main_nav);

  // // секция mission
  // const tl_mission_section = new TimelineMax();
  // tl_mission_section.staggerFrom('.mission__image', 0.3, { scale: 0.05, opacity: 0 });
  // tl_mission_section.staggerFrom('.mission__headline', 0.4, { y: '80%', opacity: 0 });
  // tl_mission_section.staggerFrom('.mission__description', 0.5, { y: '80%', opacity: 0 });
  // AnimationScene('.mission', tl_mission_section);

  // // секция team
  // const tl_team_section = new TimelineMax();
  // tl_team_section.staggerFrom('.team__headline', 0.3, { y: '80%', opacity: 0 });
  // tl_team_section.staggerFrom('.team__description', 0.4, { y: '80%', opacity: 0 });
  // tl_team_section.staggerFrom('.team__slide', 0.5, { scale: 0.05, opacity: 0 });
  // AnimationScene('.team', tl_team_section);

  // // секция certificates
  // const tl_certificates_section = new TimelineMax();
  // tl_certificates_section.staggerFrom('.certificates__headline', 0.3, { y: '80%', opacity: 0 });
  // tl_certificates_section.staggerFrom('.certificates__images-block', 0.5, {
  //   scale: 0.05,
  //   opacity: 0,
  // });
  // AnimationScene('.certificates', tl_certificates_section);

  // // секция отправить сообщение
  // const tl_message_section = new TimelineMax();
  // tl_message_section.staggerFrom('.message__link', 0.3, { x: '-80%', opacity: 0 });
  // tl_message_section.staggerFrom('.message__image', 0.5, { scale: 0.05, opacity: 0 });
  // AnimationScene('.message', tl_message_section);

  // // секция capabilities
  // const tl_capabilities_section = new TimelineMax();
  // tl_capabilities_section.staggerFrom('.capabilities__headline', 0.3, { y: '80%', opacity: 0 });
  // tl_capabilities_section.staggerFrom('.capabilities__slide', 0.5, { scale: 0.05, opacity: 0 });
  // AnimationScene('.capabilities', tl_capabilities_section);

  // // секция tools
  // const tl_tools_section = new TimelineMax();
  // tl_tools_section.staggerFrom('.tools__headline', 0.3, { y: '80%', opacity: 0 });
  // tl_tools_section.staggerFrom('.tools__image', 0.5, { y: '80%', opacity: 0 });
  // AnimationScene('.tools', tl_tools_section);

  // // секция cases
  // const tl_cases_section = new TimelineMax();
  // tl_cases_section.staggerFrom('.cases__headline', 0.3, { x: '-80%', opacity: 0 });
  // tl_cases_section.staggerFrom('.cases__link', 0.5, { x: '-80%', opacity: 0 });
  // tl_cases_section.staggerFrom('.cases__card', 0.7, { scale: 0.05, opacity: 0 });
  // AnimationScene('.cases', tl_cases_section);

  // // секция news
  // const tl_news_section = new TimelineMax();
  // tl_news_section.staggerFrom('.news__headline', 0.3, { x: '-80%', opacity: 0 });
  // tl_news_section.staggerFrom('.news__link-all', 0.5, { x: '-80%', opacity: 0 });
  // tl_news_section.staggerFrom('.news__card', 0.7, { scale: 0.05, opacity: 0 });
  // AnimationScene('.news', tl_news_section);

  // // секция message-leave
  // const tl_message_leave_section = new TimelineMax();
  // tl_message_leave_section.staggerFrom('.message-leave__headline-container', 0.3, {
  //   x: '-80%',
  //   opacity: 0,
  // });
  // tl_message_leave_section.staggerFrom('.message-leave__input-container', 0.5, {
  //   scale: 0.05,
  //   opacity: 0,
  // });
  // tl_message_leave_section.staggerFrom('.message-leave__captcha-container', 0.7, {
  //   scale: 0.05,
  //   opacity: 0,
  // });
  // AnimationScene('.message-leave', tl_message_leave_section);

  // // секция contacts
  // const tl_contacts_section = new TimelineMax();
  // tl_contacts_section.staggerFrom('.contacts__headline', 0.3, { y: '20%', opacity: 0 });
  // tl_contacts_section.staggerFrom('.contacts__links-container', 0.5, { y: '20%', opacity: 0 });
  // tl_contacts_section.staggerFrom('.contacts__address', 0.6, { y: '15%', opacity: 0 });
  // tl_contacts_section.staggerFrom('.contacts__socials', 0.6, { scale: 0.05, opacity: 0 });
  // AnimationScene('.contacts', tl_contacts_section);

  // // ////////////////////////////////////////////////////////////////////////////////////////////

  // // секция cap header
  // const tl_cap_header_section = new TimelineMax();
  // tl_cap_header_section.staggerFrom('.cap-header__headline', 0.3, { y: '-150%', opacity: 0 });
  // AnimationScene('.cap-header', tl_cap_header_section);

  // // секция strategy
  // const tl_strategy_section = new TimelineMax();
  // tl_strategy_section.staggerFrom('.strategy__headline-container', 0.3, { x: '-80%', opacity: 0 });
  // tl_strategy_section.staggerFrom('.strategy__description', 0.5, { y: '80%', opacity: 0 });
  // AnimationScene('.strategy', tl_strategy_section);

  // // секция innovating
  // const tl_innovating_section = new TimelineMax();
  // tl_innovating_section.staggerFrom('.innovating__int-container', 0.4, { x: '-50%', opacity: 0 });
  // tl_innovating_section.staggerFrom('.innovating__rev-container', 0.5, { x: '50%', opacity: 0 });
  // AnimationScene('.innovating', tl_innovating_section);

  // // секция performance
  // const tl_performance_section = new TimelineMax();
  // tl_performance_section.staggerFrom('.performance__headline', 0.3, { x: '-50%', opacity: 0 });
  // tl_performance_section.staggerFrom('.performance__image', 0.4, { scale: 0.05, opacity: 0 });
  // tl_performance_section.staggerFrom('.performance__description', 0.5, { y: '50%', opacity: 0 });
  // tl_performance_section.staggerFrom('.performance__channels-list', 0.55, { x: '50%', opacity: 0 });
  // tl_performance_section.staggerFrom('.performance__kpis-list', 0.6, { x: '50%', opacity: 0 });
  // AnimationScene('.performance', tl_performance_section);

  // // секция branding
  // const tl_branding_section = new TimelineMax();
  // tl_branding_section.staggerFrom('.branding__headline', 0.3, { y: '50%', opacity: 0 });
  // tl_branding_section.staggerFrom('.branding__image', 0.4, { scale: 0.05, opacity: 0 });
  // tl_branding_section.staggerFrom('.branding__value', 0.5, { x: '50%', opacity: 0 });
  // tl_branding_section.staggerFrom('.branding__description', 0.55, { x: '50%', opacity: 0 });
  // AnimationScene('.branding', tl_branding_section);

  // // секция e-commerce
  // const tl_e_commerce_section = new TimelineMax();
  // tl_e_commerce_section.staggerFrom('.e-commerce__headline', 0.3, { x: '-50%', opacity: 0 });
  // tl_e_commerce_section.staggerFrom('.e-commerce__image', 0.4, { scale: 0.05, opacity: 0 });
  // tl_e_commerce_section.staggerFrom('.e-commerce__description', 0.5, { y: '50%', opacity: 0 });
  // AnimationScene('.e-commerce', tl_e_commerce_section);

  // // секция audit
  // const tl_audit_section = new TimelineMax();
  // tl_audit_section.staggerFrom('.audit__headline', 0.3, { x: '-50%', opacity: 0 });
  // tl_audit_section.staggerFrom('.audit__image', 0.4, { scale: 0.05, opacity: 0 });
  // tl_audit_section.staggerFrom('.audit__accordion-container', 0.5, { y: '50%', opacity: 0 });
  // AnimationScene('.audit', tl_audit_section);
}
