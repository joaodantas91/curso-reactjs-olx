import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;

    a { 
      text-decoration: none; 
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
    }

    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      height: 60px;

      

      .logo-1,
      .logo-2,
      .logo-3 {
        font-size: 27px;
        font-weight: bold;
      }
      .logo-1 { color: #f00000 }
      .logo-2 { color: #00ff00 }
      .logo-3 { color: #0000ff }
    }

    nav {
      padding: 10px 0;

      ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      ul {
        display: flex;
        align-items: center;
        height: 40px;
      }
      li {
        margin: 0 20px;
        a {
          color: #000;
          font-size: 14px;
          &:hover {           
            color: #333;
          }

          &.button {
            background-color: #ff8100;
            border-radius: 4px;
            color: #fff;
            padding: 5px 10px;
            transition: all .4s;
            &:hover {
              background-color: #ff8130;
            }
          }
        }
      }
    }
  }
`;