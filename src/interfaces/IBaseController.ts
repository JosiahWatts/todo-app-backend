import { Request, Response } from "express";

export interface IBaseController {
    index(req: Request, res: Response): void;
    show(req: Request, res: Response): void;
    create(req: Request, res: Response): void;
    edit(req: Request, res: Response): void;
    destroy(req: Request, res: Response): void
}