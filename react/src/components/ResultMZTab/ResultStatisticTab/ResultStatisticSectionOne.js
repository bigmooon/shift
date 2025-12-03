import "../../../assets/styles/Result/Result.scss";
import FEMALE_ICON from "../../../assets/images/statisticGenderFe.png";
import MALE_ICON from "../../../assets/images/statisticGenderMale.png";
import FAMILY_ICON from "../../../assets/images/statisticFamily.png";
import FRIEND_ICON from "../../../assets/images/statisticFriend.png";
import COWORKER_ICON from "../../../assets/images/statisticCoworker.png";
import COUPLE_ICON from "../../../assets/images/statisticCouple.png";
import UNKNOWN_ICON from "../../../assets/images/statisticUnknown.png";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const ResultStatisticSectionOne = ({ repliesInfo }) => {
  const totalResponses = repliesInfo.length;

  const countByProperty = (property, value) => repliesInfo.filter(reply => reply[property] === value).length;

  const maleResponses = countByProperty('gender', 'male');
  const femaleResponses = countByProperty('gender', 'female');
  const familyResponses = countByProperty('relationship', '가족');
  const friendResponses = countByProperty('relationship', '친구');
  const coworkerResponses = countByProperty('relationship', '지인');
  const coupleResponses = countByProperty('relationship', '애인');
  const anonymousResponses = countByProperty('anonymous', true);

  const ageRanges = {
    '10대': 0,
    '20대': 0,
    '30대': 0,
    '40대': 0,
    '50대': 0,
  };

  const ageGenderCounts = {
    '10대': { male: 0, female: 0 },
    '20대': { male: 0, female: 0 },
    '30대': { male: 0, female: 0 },
    '40대': { male: 0, female: 0 },
    '50대': { male: 0, female: 0 },
  };

  repliesInfo.forEach(reply => {
    const age = parseInt(reply.ageRange, 10);
    if (age >= 10 && age < 20) ageRanges['10대'] += 1;
    else if (age >= 20 && age < 30) ageRanges['20대'] += 1;
    else if (age >= 30 && age < 40) ageRanges['30대'] += 1;
    else if (age >= 40 && age < 50) ageRanges['40대'] += 1;
    else if (age >= 50 && age < 60) ageRanges['50대'] += 1;

    if (reply.ageRange in ageGenderCounts) {
      ageGenderCounts[reply.ageRange][reply.gender]++;
    }
  });

  let maxResponses = 0;
  let maxAgeGroup = '';
  let maxGender = '';

  for (const ageRange in ageGenderCounts) {
    const genderCounts = ageGenderCounts[ageRange];
    for (const gender in genderCounts) {
      if (genderCounts[gender] > maxResponses) {
        maxResponses = genderCounts[gender];
        maxAgeGroup = ageRange;
        maxGender = gender === 'male' ? '남성' : '여성';
      }
    }
  }

  const chartTitle = `${maxAgeGroup} ${maxGender}이(가) 가장 많이 응답했어요!`;

  const charts = Object.keys(ageRanges).map(key => ({
    value: key,
    ageRange: ageRanges[key]
  }));

  const chartColors = ['#F79090', '#F8B148', '#A4D5A3', '#BE6C6C', '#B7B6D5'];

  return (
    <div className="rstSectionOneWrapper">
      <div className="rstSectionOneTitleBox">
        <span className="rstSectionOneTitle">총 응답자</span>
        <span className="rstSectionOneSubTitle">
          {totalResponses}명
        </span>
      </div>
      <div className="rstSectionOneContentWrapper">
        <div className="rstSectionOneContentBox rstGenderBox">
          <div className="rstGender">
            <div className="rstFemale">
              <img src={FEMALE_ICON} alt="female icon"/>
              <span>여성 {femaleResponses}명</span>
            </div>
            <div className="rstMale">
              <img src={MALE_ICON} alt="male icon"/>
              <span>남성 {maleResponses}명</span>
            </div> 
          </div>
        </div>
        <div className="rstSectionOneContentBox rstRelationBox">
          <div className="rstRelation">
            <div className="rstRelationContent">
              <div className="rstImgWrapper">
                <img src={FAMILY_ICON} alt="family icon"/>
              </div>
              <span>가족 {familyResponses}명</span>
            </div>
            <div className="rstRelationContent">
              <div className="rstImgWrapper">
                <img src={FRIEND_ICON} alt="friend icon"/>
              </div>
              <span>친구 {friendResponses}명</span>
            </div>
            <div className="rstRelationContent">
              <div className="rstImgWrapper">
                <img src={COWORKER_ICON} alt="coworker icon"/>
              </div>
              <span>지인 {coworkerResponses}명</span>
            </div>
            <div className="rstRelationContent">
              <div className="rstImgWrapper">
                <img src={COUPLE_ICON} alt="couple icon"/>
              </div>
              <span>애인 {coupleResponses}명</span>
            </div>
          </div>
        </div>
        <div className="rstSectionOneContentBox rstUnknownBox">
          <div className="rstUnknown">
            <img src={UNKNOWN_ICON} alt="unknown icon"/>
            <span>전체 응답자 중 {anonymousResponses}명은 익명으로 응답했어요!</span>
          </div>
        </div>
        <div className="rstSectionOneContentBox rstChartBox">
          <div className="rstChartTitle">
            <span>{chartTitle}</span>
          </div>
          <div className="rstChart">
            <ResponsiveContainer>
              <BarChart data={charts}>
                <XAxis dataKey="value" tickLine={false} axisLine={{ stroke: '#9C76AC'}} interval={0} />
                <Bar dataKey="ageRange" barSize={19.8}>
                {
                  charts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))
                }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultStatisticSectionOne;
