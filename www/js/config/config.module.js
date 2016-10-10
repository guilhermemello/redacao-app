angular.module('redacao.config',[])
  .constant('API_ENDPOINT', 'http://api-hmg.us-east-1.elasticbeanstalk.com/api/v1')
  .constant('CUSTOMER_ENDPOINT', 'http://qcon-customer-srv-hmg.elasticbeanstalk.com/api/v1')
  .constant('AUTH_CLIENT_ID', 'd60aaf0ff0b1e3ed9bb230e804f5dd1e')
  .constant('AUTH_SECRET', '79a5cafc1d7fb1ae2cf73da560521978')
  .constant('AUTH_EXPIRES_IN', '9999999999')
  .constant('VIMEO_URL', 'https://api.vimeo.com/videos')
  .constant('VIMEO_ACCES_TOKEN', '11b6405c069e1cef5a4b510c9e1e3996');
