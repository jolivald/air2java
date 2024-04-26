import { Request } from 'express';
import { Appuser } from 'src/appuser/entities/appuser.entity';


export interface RequestWithUser extends Request {
  user: Appuser
}
