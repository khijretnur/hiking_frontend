export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as MainHero } from '../../components/main/hero.vue'
export { default as MainReviews } from '../../components/main/reviews.vue'
export { default as MainTours } from '../../components/main/tours.vue'
export { default as SharedFooter } from '../../components/shared/Footer.vue'
export { default as SharedForm } from '../../components/shared/Form.vue'
export { default as SharedMobileHeader } from '../../components/shared/MobileHeader.vue'
export { default as SharedHeader } from '../../components/shared/header.vue'
export { default as SharedInstagram } from '../../components/shared/instagram.vue'
export { default as SharedTickets } from '../../components/shared/tickets.vue'
export { default as AboutHero } from '../../components/about/hero.vue'
export { default as AboutSecurity } from '../../components/about/security.vue'
export { default as AboutSpecialists } from '../../components/about/specialists.vue'
export { default as AboutTeam } from '../../components/about/team.vue'
export { default as AboutTemple } from '../../components/about/temple.vue'
export { default as AboutUs } from '../../components/about/us.vue'
export { default as ToursFilter } from '../../components/tours/filter.vue'
export { default as ToursInfo } from '../../components/tours/info.vue'
export { default as ToursMini } from '../../components/tours/mini.vue'
export { default as ToursModal } from '../../components/tours/modal.vue'
export { default as ToursRow } from '../../components/tours/row.vue'
export { default as UiBread } from '../../components/ui/bread.vue'
export { default as UiBreadcrumbs } from '../../components/ui/breadcrumbs.vue'
export { default as UiButton } from '../../components/ui/button.vue'
export { default as UiCheckbox } from '../../components/ui/checkbox.vue'
export { default as UiHeading } from '../../components/ui/heading.vue'
export { default as UiInput } from '../../components/ui/input.vue'
export { default as UiRadio } from '../../components/ui/radio.vue'
export { default as UiSelect } from '../../components/ui/select.vue'
export { default as UiSlider } from '../../components/ui/slider.vue'
export { default as SharedModalsLangModal } from '../../components/shared/modals/langModal.vue'
export { default as SharedModalsSuccess } from '../../components/shared/modals/success.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
