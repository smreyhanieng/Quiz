const controller = require('app/controllers/controller');

/* TODO:

1) Ali => 3 confirm
2) Mohammad => 1 confirm 1 reject
3) Reza => 3 reject

*/

class analystController extends controller {
	async index(req, res) {
		const analysts = await this.model.Analyst.aggregate([
			{
				$lookup: {
					from: 'decisions',
					localField: '_id',
					foreignField: 'analyst',
					as: 'decision',
				}, // Populate models
			},
			{
				$project: {
					_id: 0,
				}, // Hide _id field
			},
			{
				$addFields: {
					confirm: {
						$size: {
							$filter: {
								input: '$decision',
								as: 'decision',
								cond: { $eq: ['$$decision.analystDecision', true] },
							},
						},
					},
				}, // Confirm decision count
			},
			{ $addFields: { total: { $size: '$decision' } } }, // Total decision count
		]).sort({ confirm: -1 });
		res.json(analysts);
	}
}

module.exports = new analystController();
