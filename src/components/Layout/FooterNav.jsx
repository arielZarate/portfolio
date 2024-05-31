import { styled } from "styled-components";

export default function FooterNav() {
  return (
    <>
      {/* ======= Footer =======  */}
      <footer id="footer">
        <ContainerFooter>
          <div className="text-center">
            &copy; Copyright{" "}
            <strong>
              <span>Portfolio</span>
            </strong>
          </div>

          <div className="pt-3 text-center text-sm text-white">
            Diseñado por <span className="text-sky-500">Ariel Zarate</span>
          </div>
        </ContainerFooter>
      </footer>
      {/* End  Footer */}
    </>
  );
}

const ContainerFooter = styled.div`
  padding: 15px;
  color: #f4f6fd;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;

  margin-top: 30%;
`;
