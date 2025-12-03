const Privacy = () => {
  return (
    <div id="Container">
      <div className="tosTitle">
        <div className="subTitle">
          <span>
            개인정보 처리방침
          </span>
        </div>
        <div className="mainTitle">
          <span style={{fontSize: '1.2rem', letterSpacing: '0.05rem'}}>
            SHIFT 개인정보 처리방침
          </span>
        </div>
      </div>
      <div className="tosContent">
        <section>
          <div className="tosContentTitle">
            <span>
              [필수] 개인정보 수집 및 이용 동의
            </span>
          </div>
          <div className="tosContentText">
            <span>
              개인정보보호법 제 15조 법규에 의거하여 메타세콰이어는 고객님의 개인정보 수집 및 활용에 대해 개인정보 수집 및 활용 동의서를 받고 있습니다. 
              <br/><br/>
              개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리 책임자를 통해 열람, 정정 혹은 삭제를 요구할 수 있습니다.
              <br/><br/>
              *제공된 개인정보는 메타세콰이어의 아래 항목에 제한된 범위에서만 활용됩니다.
              <br/><br/>
              <li>
                개인정보항목
                <ol>
                  <li>이름, 휴대폰 번호, 이메일, 성별, 생년월일</li>
                  <li>필수항목: 이름, 휴대폰 번호, 이메일</li>
                  <li>선택항목: 성별, 생년월일</li>
                </ol>
              </li>
              <br/><br/>
              <li>
                개인정보 이용목적
                <ol>
                  <li>메타세콰이어 플랫폼 서비스 이용에 따른 본인 확인 절차에 이용</li>
                  <li>새로운 서비스 및 행사 정보 등의 안내</li>
                  <li>신규 서비스 개발을 위한 방문 고객 분석자료 작성에 이용</li>
                  <li>소비자 기본법 제 52조에 의거한 소비자 위해 정보 수집</li>
                </ol>
              </li>
              <br/><br/>
              개인정보보호법 제 15조에 법규에 의거하여 상기 본인은 위와 같이 개인정보 수집 및 활용에 동의함.
            </span>
          </div>
        </section>
        <section>
          <div className="tosContentTitle">
            <span>
              [선택] 마케팅 정보 수신 동의
            </span>
          </div>
          <div className="tosContentText">
            <span>
              메타세콰이어는 개인정보 보호법 제 22조 4항과 제 39조의 3에 따라 사용자의 광고성 정보 수신과 이에 따른 개인정보 처리에 대한 동의를 받고 있습니다. 약관에 동의하지 않으셔도 메타세콰이어의 모든 서비스를 이용하실 수 있습니다. 다만 이벤트, 혜택 등의 제한이 있을 수 있습니다.
              <br/><br/>
              <li>
                개인정보 수집 항목
                <ol>
                  <li>이름, 휴대폰 번호, 이메일, 성별, 생년월일</li>
                </ol>
              </li>
              <br/><br/>
              <li>
                개인정보 수집 및 이용 목적
                <ol>
                  <li>이벤트 운영 및 광고성 정보 전송</li>
                  <li>서비스 관련 정보 전송</li>              
                </ol>
              </li>
              <br/><br/>
              <li>
                보유 및 이용 기간
                <ol>
                  <li>동의 철회 시 또는 회원 탈퇴 시까지</li>
                </ol>
              </li>
              <br/><br/>
              <li>
                동의 철회 방법
                <ol>
                  <li>이메일로 요청시 변경</li>
                </ol>
              </li>
              <br/><br/>
              <li>
                전송 방법
                <ol>
                  <li>핸드폰 문자메시지(SMS), Email등</li>
                </ol>
              </li>
              <br/><br/>
              <li>
                전송 내용
                <ol>
                  <li>혜택 정보, 이벤트 정보, 상품 정보, 신규 서비스 안내 등의 광고성 정보 제공</li>
                </ol>
              </li>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
};

export default Privacy;
