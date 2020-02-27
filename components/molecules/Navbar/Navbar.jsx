/** @module Navbar */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment, PureComponent} from 'react';
import {animated, Spring} from 'react-spring/renderprops.cjs';
import Button from '~components/atoms/Button/Button';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon.tsx';
import HamburgerIcon from '~components/atoms/icons/HamburgerIcon/HamburgerIcon.tsx';
import {
  isDocumentDefined,
  isWindowDefined,
} from '~components/utilities/DetectBrowser/DetectBrowser';
import {colors} from '~constants/js/colors';
import './Navbar.scss';

/** Renders a site wide navigation bar.  */
class Navbar extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: props.isOpen,
      fixed: props.isFixed,
      scroll: 0,
      mobile: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleFixed = this.toggleFixed.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    if (prevProps.isFixed !== this.props.isFixed) {
      this.setState({
        fixed: this.props.isFixed,
      });
    }
  }

  /** @inheritdoc */
  componentDidMount() {
    if (isWindowDefined()) {
      window.addEventListener('scroll', this.toggleFixed);
      window.addEventListener('resize', this.handleResize);

      this.handleResize();
    }
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (isWindowDefined()) {
      window.removeEventListener('scroll', this.toggleFixed);
    }
  }

  /** Closes the navigation bar on active toggle.
   * @returns {undefined}
   */
  toggleActive() {
    // If the mobile navigation is open then it gets closed once a route has been selected.
    if (this.state.open) {
      this.toggleDrawer();
    }
  }

  /** Toggles the mobile drawer open/close.
   * @returns {undefined}
   */
  toggleDrawer() {
    if (!this.state.open) {
      this.setState({
        open: !this.state.open,
        scroll: !isWindowDefined() ? 0 : window.scrollY,
      });

      if (isDocumentDefined()) {
        document.documentElement.classList.add('uic--navbar__prevent-scroll');
        document.body.classList.add('uic--navbar__prevent-scroll');
      }
    } else {
      if (isDocumentDefined()) {
        document.documentElement.classList.remove(
          'uic--navbar__prevent-scroll',
        );
        document.body.classList.remove('uic--navbar__prevent-scroll');
      }
      this.setState({
        open: !this.state.open,
      });

      if (isWindowDefined()) {
        // Sets the scroll once it gets closed.
        window.scrollTo(0, this.state.scroll);
      }
    }
  }

  /** Toggles to the fixed version of the navigation bar.
   * @returns {undefined}
   */
  toggleFixed() {
    // Only toggles if isFixed and isStatic is false.
    if (
      isWindowDefined() &&
      !this.props.isFixed &&
      !this.props.isStatic &&
      !this.state.open
    ) {
      if (window.scrollY > this.props.transitionToFixed) {
        this.setState({
          fixed: true,
        });
      } else {
        this.setState({
          fixed: false,
        });
      }
    }
  }

  /** Generates the list item for the navigation bar.
   * @param {array} items - The navigation items to generate.
   * @returns {JSX} - Returns the list item JSX.
   */
  generateNavigation(items) {
    const linkProps = {
      className: 'uic--navbar__navigation-link',
    };

    return items.map((item, index) => {
      const {label, link, variant, hideFixed, hideStatic, linkComponent} = item;
      // Allows you to individually override the default link component for a specific menu item.
      const LinkWrapper = linkComponent
        ? linkComponent
        : this.props.linkComponent;
      const listItemClasses = classNames({
        'uic--position-relative': true,
        'uic--d-inline-flex': true,
        'uic--justify-content-center': true,
        'uic--navbar__navigation-active':
          (this.props.activeLink.startsWith(link) && link !== '/') ||
          this.props.activeLink === link,
        'uic--navbar__navigation-hide-fixed': hideFixed,
        'uic--navbar__navigation-hide-static': hideStatic,
      });

      if (LinkWrapper !== 'a') {
        linkProps.to = link;
      } else {
        linkProps.href = link;
      }

      return (
        <li
          className={listItemClasses}
          key={index}
          onClick={this.toggleActive}
          role="presentation"
        >
          {variant ? (
            <Button
              to={link}
              variant={variant}
              linkComponent={LinkWrapper}
              dark
            >
              {label}
            </Button>
          ) : (
            <LinkWrapper {...linkProps}>{label}</LinkWrapper>
          )}
        </li>
      );
    });
  }

  /** Handles the resizing of the navigation bar.
   * @returns {undefined}
   */
  handleResize() {
    if (isWindowDefined()) {
      this.setState({
        mobile: window.innerWidth <= 767,
      });

      if (isDocumentDefined() && this.state.open && window.innerWidth >= 992) {
        // Handles the removal of the fixed class if the window is resized with the bar open.
        document.documentElement.classList.remove(
          'uic--navbar__prevent-scroll',
        );
        document.body.classList.remove('uic--navbar__prevent-scroll');

        this.setState({
          open: false,
        });
      }
    }
  }

  /** @inheritdoc */
  render() {
    const {
      className,
      fixedLogo,
      leftNavigation,
      logoLink,
      rightNavigation,
      staticLogo,
      staticLogoMobile,
      style,
    } = this.props;

    const {fixed, open, mobile} = this.state;

    const containerClasses = classNames(
      {
        'uic--navbar': true,
        'uic--navbar__open': open,
        'uic--navbar__fixed': fixed,
        'uic--navbar__static': !fixed,
        'uic--position-fixed': fixed,
        'uic--w-100': fixed,
        'uic--d-flex': true,
      },
      className,
    );

    const mobileWrapperClasses = classNames({
      'uic--navbar__mobile-drawer-wrapper': true,
      'uic--navbar__mobile-drawer-wrapper-closed': !open,
      'uic--position-fixed': true,
      'uic--w-100': true,
      'uic--h-100': true,
    });

    const IconComponent = open ? CloseIcon : HamburgerIcon;
    const renderLeftNavigation = leftNavigation
      ? this.generateNavigation(leftNavigation)
      : null;
    const renderRightNavigation = rightNavigation
      ? this.generateNavigation(rightNavigation)
      : null;

    const linkProps = {
      'aria-label': 'home',
    };
    const LinkWrapper = this.props.linkComponent;
    if (this.props.linkComponent !== 'a') {
      linkProps.to = logoLink;
    } else {
      linkProps.href = logoLink;
    }
    const navbarLogo = fixed
      ? fixedLogo
      : mobile && staticLogoMobile
      ? staticLogoMobile
      : staticLogo;

    return (
      <nav className={containerClasses} style={style} role="navigation">
        <div className="uic--navbar__logo uic--d-flex uic--align-items-center">
          {logoLink ? (
            <LinkWrapper {...linkProps}>{navbarLogo}</LinkWrapper>
          ) : (
            <Fragment>{navbarLogo}</Fragment>
          )}
        </div>

        <div className="uic--navbar__left-navigation uic--d-flex uic--align-items-center uic--w-100">
          <ul className="uic--navbar__left-navigation-list">
            {renderLeftNavigation}
          </ul>
        </div>

        <div className="uic--navbar__right-navigation uic--d-flex uic--align-items-center uic--w-100">
          <ul className="uic--navbar__right-navigation-list">
            {renderRightNavigation}
          </ul>
        </div>

        <div className="uic--navbar__mobile-drawer uic--position-relative">
          <div
            className="uic--navbar__mobile-drawer-icon uic--d-flex uic--align-items-center uic--h-100"
            onKeyPress={this.toggleDrawer}
            onClick={this.toggleDrawer}
            role="button"
            tabIndex="0"
          >
            <IconComponent
              width="24px"
              height="24px"
              fill={fixed ? colors['white'] : colors['slate']}
            />
          </div>
          <div className={mobileWrapperClasses}>
            <Spring native to={{start: open ? 100 : 0}}>
              {({start}) => (
                <animated.div
                  className="uic--navbar__mobile-drawer-inner"
                  style={{
                    height: start.interpolate((o) => `${o}%`),
                  }}
                  tabIndex="0"
                  onClick={open ? this.handleClick : null}
                  onKeyPress={open ? this.handleClick : null}
                >
                  <ul className="uic--navbar__mobile-drawer-list uic--h-100">
                    {renderLeftNavigation}
                    {renderRightNavigation}
                  </ul>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Optional button component, allowing you to wrap the button in things such as rect-router-dom's Link.  */
  linkComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  /** The path the logo should direct users to. */
  logoLink: PropTypes.string,
  /** Allows you to specify if the navigation bar should always be fixed. */
  isFixed: PropTypes.bool,
  /** Allows you to specify if the navigation bar should always be static. */
  isStatic: PropTypes.bool,
  /** Allows you to default the mobile pullout menu to an open state. */
  isOpen: PropTypes.bool,
  /** The logo which should appear in the fixed position. */
  fixedLogo: PropTypes.node,
  /** The logo which should appear in the static position. */
  staticLogo: PropTypes.node,
  /** Optional logo to display on mobile devices when the navigation bar is in the static state. */
  staticLogoMobile: PropTypes.node,
  /** Determines at what point the navigation bar should switch to the fixed state. Measured in pixels from the top. */
  transitionToFixed: PropTypes.number,
  /** The current route which is provided to apply proper active highlighting on load. */
  activeLink: PropTypes.string.isRequired,
  /** Navigation items which appear in the left of the bar. */
  leftNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** The navigation item label. */
      label: PropTypes.string.isRequired,
      /** The url the navigation item should take you to. */
      link: PropTypes.string.isRequired,
      /** Allows you to specify a button variant for the item. */
      variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'link',
        'icon',
      ]),
      /** Hides the item on the fixed state. */
      hideFixed: PropTypes.bool,
      /** Hides the item on the static state. */
      hideStatic: PropTypes.bool,
      /** Button component override for a specific menu item.  */
      linkComponent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
      ]),
    }),
  ),
  /** Navigation items which appear on the right side of the bar. */
  rightNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** The navigation item label. */
      label: PropTypes.string.isRequired,
      /** The url the navigation item should take you to. */
      link: PropTypes.string.isRequired,
      /** Allows you to specify a button variant for the item. */
      variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'link',
        'icon',
      ]),
      /** Hides the item on the fixed state. */
      hideFixed: PropTypes.bool,
      /** Hides the item on the static state. */
      hideStatic: PropTypes.bool,
      /** Button component override for a specific menu item.  */
      linkComponent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
      ]),
    }),
  ),
};

Navbar.defaultProps = {
  activeLink: '',
  isFixed: false,
  isOpen: false,
  isStatic: false,
  linkComponent: 'a',
  transitionToFixed: 0,
};

export default Navbar;
