import { LitElement, html, css } from "lit";
import resetCss from "./resetCSS";

class Header extends LitElement {
  static get styles() {
    return [
      resetCss,
      css`
        header {
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          color: black;
          padding: 1rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        nav {
          display: flex;
          align-items: center;
          ul {
            display: flex;
            gap: 1rem;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <h1 class="logo">
          <a href="/"
            ><img style="width:30px" src="/logo.png" alt="" />
            <span>쇼핑은 역시 범Card몰</span>
          </a>
        </h1>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("c-header", Header);
