const MessageSchema = require("../schemas/Message");

class MessageControler {
  async list(req, res) {
    const messages = await MessageSchema.find({});
    return res.json(messages);
  }

  async show(req, res) {
    const { _id } = req.params;
    const message = await MessageSchema.findById(_id);
    return res.json(message);
  }

  async create(req, res) {
    const message = await MessageSchema.create(req.body);
    return res.json(message);
  }

  async delete(req, res) {
    const { _id } = req.params;
    const message = await MessageSchema.findByIdAndRemove(_id);
    return res.json(message);
  }
}

module.exports = new MessageControler();
