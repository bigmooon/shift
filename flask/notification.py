# import solapi
import config

import json
import time
import datetime
import uuid
import hmac
import hashlib
import requests
import platform

# 아래 값은 필요시 수정
# protocol = 'https'
# domain = 'api.solapi.com'
# prefix = ''

# template_ids = {
#     'send_link': config.SOLAPI_TEMPLATE_LINK,
#     'send_result': config.SOLAPI_TEMPLATE_RESULT
# }

def __unique_id__():
    return str(uuid.uuid1().hex)

def __get_iso_datetime__():
    utc_offset_sec = time.altzone if time.localtime().tm_isdst else time.timezone
    utc_offset = datetime.timedelta(seconds=-utc_offset_sec)
    return datetime.datetime.now().replace(tzinfo=datetime.timezone(offset=utc_offset)).isoformat()

def __get_signature__(key, msg):
    return hmac.new(key.encode(), msg.encode(), hashlib.sha256).hexdigest()

def __get_headers__(api_key, api_secret):
    date = __get_iso_datetime__()
    salt = __unique_id__()
    combined_string = date + salt

    return {
        'Authorization': 'HMAC-SHA256 ApiKey=' + api_key + ', Date=' + date + ', salt=' + salt + ', signature=' +
                         __get_signature__(api_secret, combined_string),
        'Content-Type': 'application/json; charset=utf-8'
    }

def __get_url__(path):
    url = '%s://%s' % (protocol, domain)
    if prefix != '':
        url = url + prefix
    url = url + path
    return url

# def __send_many__(parameter):
#     api_key = config.SOLAPI_API_KEY
#     api_secret = config.SOLAPI_API_SECRET
#     parameter['agent'] = {
#         'sdkVersion': 'python/4.2.0',
#         'osPlatform': platform.platform() + " | " + platform.python_version()
#     }

#     return requests.post(__get_url__('/messages/v4/send-many'), headers=__get_headers__(api_key, api_secret), json=parameter)

'''
# example
data = {
    'messages': [
         {
            'to': '01000000000',
            'from': '020000000',
            'kakaoOptions': {
                'pfId': 'KA01PF200323182344986oTFz9CIabcx',
                'templateId': 'KA01TP200323182345741y9yF20aabcx',
                # 변수: 값 형식으로 모든 변수에 대한 변수값 입력
                'variables': {
                    '#{변수1}': '변수1의 값',
                    '#{변수2}': '변수2의 값',
                    '#{버튼링크1}': '버튼링크1의 값',
                    '#{버튼링크2}': '버튼링크2의 값',
                    '#{강조문구}': '강조문구의 값'
                }
            }
        }
    ]
}
'''

# def make_link_notify_message(phone_number, member_name, test_name, tid):
#     phone_number = phone_number.replace('-', '')
#     return {
#         'to': phone_number,
#         'from': config.SOLAPI_CALLER_NUMBER,
#         'kakaoOptions': {
#             'pfId': config.KAKAO_PFID,
#             'templateId': config.SOLAPI_TEMPLATE_LINK,
#             'variables': {
#                 '#{회원명}': member_name,
#                 '#{테스트명}': test_name,
#                 '#{tid}': tid
#             }
#         }
#     }

# def make_result_notify_message(phone_number, member_name, test_name, number_of_reply):
#     phone_number = phone_number.replace('-', '')
#     return {
#         'to': phone_number,
#         'from': config.SOLAPI_CALLER_NUMBER,
#         'kakaoOptions': {
#             'pfId': config.KAKAO_PFID,
#             'templateId': config.SOLAPI_TEMPLATE_RESULT,
#             'variables': {
#                 '#{회원명}': member_name,
#                 '#{테스트명}': test_name,
#                 '#{응답 인원 수}': number_of_reply
#             }
#         }
#     }

# def send_solapi_message(message):
#     data = {
#         'messages': [message]
#     }
#     res = __send_many__(data)
#     return res.json()