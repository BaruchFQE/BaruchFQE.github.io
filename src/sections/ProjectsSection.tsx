import { useState } from 'react';
import { ArrowRight, X, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    label: 'Kalman Filter For Volatility Surface',
    shortDesc: 'Real-time options theoretical value updates using an Unscented Kalman Filter.',
    fullDesc: 'We construct a methodology that offers a quick way for option market makers to update their theoretical values for options in real-time. We use an Unscented Kalman Filter (UKF) to quickly calibrate the implied volatility surface parameterization, which replaces the need for a costly objective function that needs to be minimized, allowing for real-time updates of the volatility surface.',
    pdfLink: '/project-pdfs/kalman-filter-for-volatility-surface.pdf',
  },
  {
    id: 2,
    label: 'Sentiment Analysis Project',
    shortDesc: 'Predicting stock movement using sentiment from social/news/event text plus price data.',
    fullDesc: 'This project aims to predict stock price movements by integrating sentiment analysis of Twitter posts, financial news articles, and Kalshi event contract names with historical stock data. By quantifying public sentiment overall and toward specific stocks, we seek to uncover patterns and correlations that influence market dynamics. A Long-Short-Term Memory (LSTM) neural network will model temporal dependencies within the combined sentiment metrics and stock prices.',
    pdfLink: '/project-pdfs/sentiment-analysis-project.pdf',
  },
  {
    id: 3,
    label: 'Kalshi Predictive Position Building',
    shortDesc: 'Implement market making strategies to provide and take event liquidity.',
    fullDesc: 'We use market making strategies to defined by the level of uncertainty (risk averse and eager counterparties) to define optimal outcomes to build into an event contract position. Given high uncertainty in the market the optimal response is to be more certain, the opposite response is to make the market of an eager competitor with high certainty.',
    pdfLink: '/project-pdfs/kalshi-predictive-position-building.pdf',
  },
];

const pastProjects = [
  {
    id: 1,
    year: 2024,
    label: 'Front Running Event Contracts',
    fullDesc: 'In this project, our team developed a trade surveillance system to identify front-running behaviors within event contracts, focusing on order book imbalances that precede major price-moving outcomes. We analyzed high-frequency transaction data and limit order flows to build a scoring model that flags suspicious liquidity-taking trades occurring just before significant event-driven volatility. The completed framework successfully distinguished between legitimate hedging strategies and predatory "trading ahead," providing actionable insights for improving market integrity and regulatory compliance.',
    members: 'Alexandre T, Andrew S, Dzara M',
  },
  {
    id: 2,
    year: 2024,
    label: 'Mean Reversion Portfolio',
    fullDesc: 'Our team engineered a mean-reverting portfolio by applying L1-regularization to select a sparse, tradable subset of assets from a high-dimensional universe. We formulated an optimization problem that maximizes the Ornstein-Uhlenbeck reversion speed while simultaneously minimizing the number of active positions to reduce transaction costs. The final framework provided a robust statistical arbitrage strategy that maintained high predictive accuracy even under significant market regime shifts.',
    members: 'Daniel S, Joseph M, Liam L, Moussa K',
  },
  {
    id: 3,
    year: 2025,
    label: 'Real-Time Value: A Model for Exchange-Sportsbook Edge Capture',
    fullDesc: 'In this project, our team engineered a real-time valuation engine that identifies mispriced odds by systematically comparing traditional sportsbook lines against the high-efficiency consensus of peer-to-peer betting exchanges. We developed a Bayesian framework to filter market noise and generate credible intervals around true implied probabilities, triggering execution when discrepancies exceeded a pre-defined profitability threshold. The final model serves as a robust statistical arbitrage tool, successfully capturing "edge" through automated liquidity monitoring and sub-second execution logic.',
    members: 'Eli W, Joseph M',
  },
  {
    id: 4,
    year: 2025,
    label: 'Kalshi Predictive Position Building',
    fullDesc: 'We use market making strategies to defined by the level of uncertainty (risk averse and eager counterparties) to define optimal outcomes to build into an event contract position. Given high uncertainty in the market the optimal response is to be more certain, the opposite response is to make the market of an eager competitor with high certainty.',
    members: 'Alexandre T, Arthur F, Zachary J',
  },
  {
    id: 5,
    year: 2025,
    label: 'Pairs Trading Strategy Exploration',
    fullDesc: 'Our team engineered an automated pairs trading system that identifies and exploits transient price discrepancies between highly cointegrated asset pairs. We utilized Kalman Filters for dynamic hedge ratio estimation and implemented an Ornstein-Uhlenbeck process to model the mean-reversion speed of the spread. The final framework successfully backtested a market-neutral strategy, delivering consistent alpha by capturing sub-second "real-time value" during periods of heightened sectoral volatility.',
    members: 'Arthur F, William V',
  },
  {
    id: 6,
    year: 2025,
    label: 'Volatility-Regime Markov Chain',
    fullDesc: 'In this project, our team engineered a Hidden Markov Model (HMM) to systematically identify and transition between distinct volatility regimes in real-time market data. We utilized maximum likelihood estimation to detect latent states—such as "quiet growth" versus "panic selling"—allowing for dynamic position sizing based on the prevailing risk environment. The final framework successfully enhanced a mean-reversion strategy by automatically scaling exposure down during high-volatility regimes to preserve capital and mitigate tail risk.',
    members: 'Daniel S',
  },
  {
    id: 7,
    year: 2025,
    label: 'High-Frequency Trading with Fractional Brownian Motion',
    fullDesc: 'In this project, our team engineered a high-frequency trading system that utilizes Fractional Brownian Motion (fBM) to model asset price paths with long-range dependence and "memory" effects. We developed a real-time estimator for the Hurst exponent to distinguish between trending and mean-reverting regimes, allowing for dynamic adjustments in trade execution. The final framework successfully enhanced alpha generation by capturing sub-second inefficiencies that traditional Markovian models often overlook.',
    members: 'Arthur F, Amber T, Matt C',
  },
  {
    id: 8,
    year: 2025,
    label: 'Markov Switching Variance Gamma',
    fullDesc: 'In this project, our team engineered a Markov Switching framework to capture the heavy tails and volatility clusters of asset returns by allowing Variance Gamma process parameters to transition between latent market states. We utilized an Expectation-Maximization (EM) algorithm to calibrate the model, successfully capturing the "jump-diffusion" characteristics that traditional Black-Scholes models often overlook. The final system improved option pricing accuracy and risk management by dynamically adjusting to regime shifts in skewness and kurtosis.',
    members: 'Kateryna C, Rodrigo S',
  },
  {
    id: 9,
    year: 2025,
    label: 'Momentum Risk Management',
    fullDesc: 'In this project, our team engineered a dynamic risk overlay for momentum strategies to mitigate the impact of sudden trend reversals and "momentum crashes." We utilized a volatility-scaling approach combined with cross-sectional dispersion metrics to adjust position sizes in real-time as market conditions shifted. The final framework significantly improved the Sharpe ratio by preserving capital during high-risk regimes while maintaining exposure to strong performance trends.',
    members: 'Alexandre T, Edward C, Harmony L, Hope L',
  },
  {
    id: 10,
    year: 2025,
    label: 'Pricing Convertible Bonds Using Monte Carlo Simulation',
    fullDesc: 'n this project, our team developed a Monte Carlo simulation framework to value convertible bonds by integrating path-dependent features such as early redemption, soft calls, and downward adjustment clauses. We utilized the Least Squares Monte Carlo (LSM) method to determine optimal exercise boundaries for the embedded American-style options while accounting for the dynamic coupling of credit risk and stock price volatility. The completed model successfully provided more accurate pricing than traditional lattice-based methods, particularly for complex hybrid securities in volatile market regimes.',
    members: 'Alexi T, Alan W, Megumi A',
  },
  {
    id: 11,
    year: 2025,
    label: 'Sentiment Metrics and Investor Demand',
    fullDesc: 'In this project, our team engineered a system to quantify investor sentiment and its direct impact on asset demand shocks, distinguishing between institutional and individual behavioral drivers. We utilized Natural Language Processing (NLP) to extract real-time features from news and social media, integrating them into a predictive framework to identify shifts from safe to speculative securities. The completed project successfully demonstrated that sentiment-induced demand serves as a robust indicator for short-term market mispricing and return reversals across different volatility regimes. ',
    members: 'Arthur F, Dmytro P, Emily P, Mantra S',
  },
  {
    id: 12,
    year: 2025,
    label: 'Forecasting Foreign Exchange Behavior',
    fullDesc: 'In this project, our team developed a forecasting framework that utilizes Principal Component Analysis (PCA) to identify the dominant "eigen-factors" driving movements across a basket of global currencies. We engineered an adaptive eigenvector scaling model that dynamically reweights these factors to capture shifting correlations and lead-lag relationships during different market regimes. The completed system successfully enhanced FX return predictions and risk decomposition, providing a more robust alternative to traditional static correlation models in high-dimensional currency markets.',
    members: 'Alexi T, Andy L, Bryan L, Saikaung S',
  },
  {
    id: 13,
    year: 2024,
    label: 'Kelly Criterion Portfoilio Optimization',
    fullDesc: 'In this project, our team engineered a dynamic asset allocation system by applying the Kelly Criterion to maximize the long-term exponential growth rate of a diversified portfolio. We developed a fractional Kelly model to mitigate high turnover and extreme drawdown risks, incorporating a shrinkage-based covariance estimator to stabilize return forecasts. The completed framework successfully outperformed equal-weighted benchmarks in backtesting, demonstrating superior risk-adjusted returns through mathematically optimized position sizing. ',
    members: 'William V',
  },
  {
    id: 14,
    year: 2024,
    label: 'News Sentiment Analysis',
    fullDesc: 'In this project, our team engineered a real-time sentiment pipeline that converts unstructured financial news and headlines into actionable trading signals. We utilized FinBERT and LLM-based classification to extract polarity scores, which were then integrated into a Long Short-Term Memory (LSTM) network alongside historical price data. The completed framework demonstrated that incorporating news-based variables significantly enhanced predictive accuracy, identifying short-term market mispricings that traditional technical indicators often overlook.',
    members: 'Joseph G, Joseph M',
  },
  {
    id: 15,
    year: 2024,
    label: 'Kelly-Criterion Portfolio Optimization with Re-Sampling',
    fullDesc: 'In this project, our team enhanced the Kelly Criterion by integrating Resampled Efficiency to address the formula’s inherent sensitivity to estimation errors in mean returns and covariance. We utilized Monte Carlo simulations to generate a distribution of optimal portfolios, averaging them to create a "resampled" allocation that is more robust to market noise. The completed framework significantly reduced portfolio turnover and extreme drawdowns compared to a traditional Kelly approach while maintaining superior long-term exponential growth.',
    members: 'William V',
  },
  {
    id: 16,
    year: 2024,
    label: 'Kelly-Criterion Portfolio Optimization with Re-Sampling',
    fullDesc: 'In this project, our team engineered an automated statistical arbitrage system that identifies and exploits transient price discrepancies between highly cointegrated asset pairs. We utilized the Engle-Granger two-step method to establish long-term equilibrium and applied Kalman Filters to dynamically update the hedge ratio in real-time. The final framework successfully executed a market-neutral strategy, generating consistent alpha by capturing mean-reverting spreads while mitigating exposure to broader market volatility.',
    members: 'Colin A, Nick G',
  },
  {
    id: 17,
    year: 2023,
    label: 'Quantile ML Cross-Section Returns',
    fullDesc: 'In this project, our team engineered a Quantile Regression framework combined with Machine Learning to model the conditional distribution of cross-sectional asset returns. We utilized Gradient Boosted Trees with pinball loss functions to predict specific return quantiles, allowing for a more granular assessment of tail risk and potential upside compared to traditional mean-based models. The completed project successfully generated robust factor signals that outperformed standard linear regressions by capturing non-linear relationships and conditional skewness across various market regimes.',
    members: 'Elhaam B, Zhi L',
  },
  {
    id: 18,
    year: 2023,
    label: 'Stock Factor Library',
    fullDesc: 'In this project, our team engineered a high-performance factor research library designed to systematically compute and evaluate traditional and alternative alpha signals across a broad equity universe. We implemented a modular pipeline for calculating momentum, value, and quality factors, incorporating robust techniques like Winsorization and Z-score normalization to ensure cross-sectional comparability. The completed library serves as a scalable backtesting engine, enabling rapid factor attribution and the identification of decay profiles across different market regimes.',
    members: 'William V, Elhaam B',
  },
  {
    id: 19,
    year: 2023,
    label: 'Cointegration Dispersion Pairs Trade',
    fullDesc: 'In this project, our team expanded the traditional pairs trading framework into a dispersion-based model by identifying cointegration clusters among multiple stocks within the same sector. We utilized Johansen tests to establish a long-term equilibrium between an index and its components, enabling us to trade the relative value of the basket\'s spread against the broader market. The final system successfully exploited implied volatility discrepancies and mean-reverting relationships, delivering a market-neutral return profile even during periods of individual stock decoupling.',
    members: 'Colin A, Daniel S, Matt M,',
  },
  {
    id: 20,
    year: 2023,
    label: 'Factor Momentum Trading',
    fullDesc: 'In this project, our team engineered a factor momentum strategy that captures persistent trends in the performance of classic equity factors like value, size, and quality. We utilized a recursive weighting scheme based on historical information ratios to dynamically allocate capital toward the strongest-trending factors while de-emphasizing those showing signs of mean reversion. The completed framework successfully enhanced traditional static factor models by adapting to shifting market regimes and reducing the impact of factor crashes.',
    members: 'Colin A, Zhi L',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isPastProjectsOpen, setIsPastProjectsOpen] = useState(false);
  const projectsByYear = Object.entries(
    pastProjects.reduce<Record<number, typeof pastProjects>>((acc, project) => {
      if (!acc[project.year]) acc[project.year] = [];
      acc[project.year].push(project);
      return acc;
    }, {})
  ).sort((a, b) => Number(b[0]) - Number(a[0]));

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-primary-dark relative flex items-center py-[10vh]"
      >
        <div className="w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Panel */}
          <div className="photo-frame aspect-[3/4] max-h-[72vh]">
            <img
              src="https://images.pexels.com/photos/7794037/pexels-photo-7794037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1200"
              alt="Woman using a laptop in a project meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col justify-center">
            {/* Micro Label */}
            <span className="micro-label text-secondary-light mb-6">
              Projects
            </span>

            {/* Headline */}
            <h2 className="headline-lg text-primary-light mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Our Current Work
            </h2>

            {/* Body */}
            <p className="body-text text-secondary-light mb-8">
              From alpha research to development, we build practical, relevant, hands-on projects.
            </p>

            {/* Projects List */}
            <div className="space-y-4 mb-8">
              {projects.map((project) => (
                <div key={project.id} className="hover-panel border border-white/10 bg-secondary-dark/35 p-4 flex flex-col">
                  <span className="micro-label text-accent-green mb-1">{project.label}</span>
                  <span className="body-text text-secondary-light" style={{ fontSize: '0.9rem' }}>
                    {project.shortDesc}
                  </span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => setSelectedProject(projects[0])}
              className="cta-button w-fit"
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setIsPastProjectsOpen(true)}
              className="text-link mt-4 w-fit text-left"
            >
              Past Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="headline-lg text-primary-light" style={{ fontSize: '1.5rem' }}>
                Our Projects
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-secondary-light hover:text-accent-green transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`mb-8 pb-8 ${project.id !== projects.length ? 'border-b border-white/10' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="micro-label text-accent-green">{project.label}</span>
                    <a
                      href={project.pdfLink}
                      className="text-link inline-flex items-center gap-1 text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View PDF</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="body-text text-secondary-light">
                    {project.fullDesc}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 flex justify-between items-center">
              <a
                href="https://github.com/BaruchFinancialQuantsEngineers-FQE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-2"
              >
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="cta-button"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Past Projects Modal */}
      {isPastProjectsOpen && (
        <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="headline-lg text-primary-light" style={{ fontSize: '1.5rem' }}>
                Past Projects
              </h3>
              <button
                onClick={() => setIsPastProjectsOpen(false)}
                className="text-secondary-light hover:text-accent-green transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {projectsByYear.map(([year, yearProjects]) => (
                <details key={year} className="border border-white/10">
                  <summary className="micro-label text-accent-green cursor-pointer px-4 py-3">
                    {year}
                  </summary>
                  <div className="px-4 pb-4 pt-2">
                    {yearProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className={`py-4 ${index !== yearProjects.length - 1 ? 'border-b border-white/10' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="micro-label text-accent-green">{project.label}</span>
                        </div>
                        <p className="body-text text-secondary-light">
                          {project.fullDesc}
                        </p>
                        <p className="body-text text-secondary-light mt-3" style={{ fontSize: '0.9rem' }}>
                          <span className="micro-label text-accent-green mr-2">Members:</span>
                          {project.members}
                        </p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="p-6 border-t border-white/10 flex justify-between items-center">
              <a
                href="https://github.com/BaruchFinancialQuantsEngineers-FQE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-2"
              >
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setIsPastProjectsOpen(false)}
                className="cta-button"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

