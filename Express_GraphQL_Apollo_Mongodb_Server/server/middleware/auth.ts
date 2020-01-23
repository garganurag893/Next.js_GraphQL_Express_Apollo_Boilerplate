/**
 * Define middlerware for extracting authToken
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import * as jwt from 'jsonwebtoken';
import config from '../../config';

export default (req: any, res: any, next: any) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, config.jwtSecret);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  return next();
};
