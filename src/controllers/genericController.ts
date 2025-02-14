import { Request, Response, NextFunction } from 'express';
import {  Model } from 'mongoose';

export class GenericController<T> {
  constructor(private model: Model<T>) {}

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const doc = await this.model.create(req.body);
      res.status(201).json(doc);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const updatedDoc = await this.model.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedDoc) {
        res.status(404).json({ message: 'Document not found' });
        return;
      }
      res.status(200).json(updatedDoc);
    } catch (error) {
      next(error);
    }
  };

  public get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const doc = await this.model.findById(id);
      if (!doc) {
        res.status(404).json({ message: 'Document not found' });
        return;
      }
      res.status(200).json(doc);
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const docs = await this.model.find({});
      res.status(200).json(docs);
    } catch (error) {
      next(error);
    }
  };

  public updateAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.model.updateMany({}, req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
