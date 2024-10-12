import stockmarketchart from 'images/stockmarketchart.jpg';
import creditfraud from 'images/creditfraud.jpg';
import gptjudge from 'images/gptjudge.jpg';
import mtacommutepal from 'images/mtacommutepal.jpg';

// All images should have a near 1:1 aspect ratio for consistency.

export default [
  {
    title: 'Algorithmic ML Trading Strategy',
    description: 'A model that achieved 29.48% ROI by predicting optimal trading days using macroeconomic data and volatility scores for IWM ETF stock.',
    skills: ['Python', 'AutoML', 'Quant Analysis'],
    image: stockmarketchart,
    links: {
      github: 'https://github.com/johri-lab/Algorithmic-ML-Trading-Strategy',
    },
  },
  {
    title: 'Credit Card Fraud Detection Using Explainable AI',
    description: 'A fraud detection system leveraging embedding models and AutoML with a focus on transparency through explainable AI techniques.',
    skills: ['Python', 'AI Ethics', 'AutoML', 'NLP'],
    image: creditfraud,
    links: {
      github: 'https://github.com/johri-lab/Credit_card_fraud_detection_explainableAI',
    },
  },
  {
    title: 'GenAIJudge',
    description: 'Developed for a hackathon, this tool leverages GPT-4 to evaluate and score sustainability policies based on dynamic scoring rubrics.',
    skills: ['Python', 'GPT-4', 'AI Ethics'],
    image: gptjudge,
    links: {
      github: 'https://github.com/johri-lab/GenAIJudge',
    },
  },
  {
    title: 'MTA Commute Pal',
    description: 'A Columbia Hackathon project designed to optimize commuter travel using predictive models and MTA data analytics.',
    skills: ['Python', 'Data Science', 'Jupyter Notebooks'],
    image: mtacommutepal,
    links: {
      github: 'https://github.com/johri-lab/MTA-Commute-Pal',
    },
  },
];
