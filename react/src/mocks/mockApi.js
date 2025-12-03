import { DEMO_USER, DEMO_EPA_TEST, DEMO_STATS, EPA_KEYWORDS } from './mockData';

export const isDemoMode = process.env.REACT_APP_MODE === 'demo';

const mockDelay = (ms = 30) =>
  new Promise((resolve) => setTimeout(resolve, ms));

class mockAPI {
  constructor() {
    this.isDemo = isDemoMode;
    this.user = { ...DEMO_USER };
    this.test = { ...DEMO_EPA_TEST };
  }

  // simulation for user registration
  async login() {
    await mockDelay(300);
    return {
      name: this.user.name,
      platform_type: this.user.platform_type,
      isDemo: this.isDemo,
    };
  }

  // simulation for user logout
  async logout() {
    await mockDelay(200);
    return { description: 'logout_success' };
  }

  // simulation for user verification
  async verifyLogin() {
    await mockDelay(100);
    return {
      name: this.user.name,
      expires_in: 3600,
    };
  }

  // get static data
  async getTotalNum() {
    await mockDelay(100);
    return { total_num: DEMO_STATS.total_num };
  }

  // get EPA keywords
  async getEPAKeywords() {
    await mockDelay(100);
    return EPA_KEYWORDS;
  }

  // get my tests
  async getMyTests() {
    await mockDelay(100);
    return {
      epa: [this.test.tid, this.test.replies.length, this.test.nickname],
    };
  }

  // save EPA test(not for real)
  async saveEpaTest(testData) {
    await mockDelay(300);
    return { tid: this.test.tid };
  }

  // get EPA test reply
  async getEpaTestReply(tid) {
    await mockDelay(200);
    if (tid !== this.test.tid) {
      throw new Error('tid not found');
    }

    return {
      nickname: this.test.nickname,
      total_num: DEMO_STATS.total_num,
      keyword_myself: this.test.keyword_myself,
      keyword_want: this.test.keyword_want,
      keyword_others: this.test.keyword_others,
    };
  }

  // save EPA reply(not for real)
  async saveEpaReply(replyData) {
    await mockDelay(300);
    return { description: 'success_without_notification' };
  }

  // get EPA result
  async getEpaResult() {
    await mockDelay(200);
    return {
      nickname: this.test.nickname,
      total_num: DEMO_STATS.total_num,
      keyword_myself: this.test.keyword_myself,
      keyword_want: this.test.keyword_want,
      keyword_others: this.test.keyword_others,
    };
  }
}

export const mockApi = new mockAPI();
