/* Site manifest: an Introduction (ch00) + 6 Parts -> chapters -> ordered slides.
   Titles and per-chapter descriptions follow the book's own framing.
   Only chapters with active:true and a populated slides[] are linked from the launcher. */
window.SITE_MANIFEST = {
  bookTitle: "The Hitchhiker's Guide to Agentic AI",
  author: "Haggai Roitman",
  credit: "An interactive, simplified companion for newcomers. Every idea, the chapter structure, and the figures come from the book by Haggai Roitman (2026); this deck only reorganizes them into a visual learning guide. For the full, rigorous treatment, read the original.",

  intro: {
    id: "ch00", num: 0, dir: "chapters/ch00-introduction",
    title: "Introduction", desc: "What this guide covers, the road to agentic AI, and how to read this deck.",
    active: true,
    slides: [
      { file: "01-cover.html",        label: "Cover" },
      { file: "02-what-this-is.html", label: "What this is" },
      { file: "03-big-picture.html",  label: "The big picture" },
      { file: "04-road-history.html", label: "The road to agentic AI" },
      { file: "05-pattern.html",      label: "The pattern" },
      { file: "06-how-organized.html",label: "How it is organized" },
      { file: "07-what-you-gain.html",label: "What you will gain" },
      { file: "08-how-to-read.html",  label: "How to read this deck" },
      { file: "09-start.html",        label: "Start with Part I" }
    ]
  },

  parts: [
    {
      eyebrow: "PART I", name: "Foundations",
      blurb: "The base knowledge the rest depends on: how LLMs work, the hardware that runs them, and RL from first principles.",
      chapters: [
        {
          id: "ch01", num: 1, dir: "chapters/ch01-llm-architecture",
          title: "LLM Architecture and Optimization Methods",
          desc: "Transformer internals, Flash Attention, optimization, LoRA/QLoRA, quantization, distillation, and Mixture of Experts.",
          active: true,
          slides: [
            { file: "01-cover.html",            label: "Cover" },
            { file: "02-core-idea.html",        label: "Core idea" },
            { file: "03-pipeline.html",         label: "How LLMs work" },
            { file: "04-tokenization.html",     label: "Tokenization" },
            { file: "05-embeddings.html",       label: "Embeddings" },
            { file: "06-self-attention.html",   label: "Self-attention" },
            { file: "07-multihead-position.html", label: "Multi-head & position" },
            { file: "08-gqa-kvcache.html",      label: "GQA & KV cache" },
            { file: "09-transformer-block.html", label: "The Transformer block" },
            { file: "10-flash-attention.html",  label: "Flash Attention" },
            { file: "11-optimizer.html",        label: "The optimizer" },
            { file: "12-training-stability.html", label: "Training stability" },
            { file: "13-lora.html",             label: "LoRA & QLoRA" },
            { file: "14-compression.html",      label: "Smaller & cheaper" },
            { file: "15-moe.html",              label: "Mixture of Experts" },
            { file: "16-decoding.html",         label: "Decoding" },
            { file: "17-anti-patterns.html",    label: "Anti-patterns" },
            { file: "18-takeaways.html",        label: "Key takeaways" },
            { file: "19-check-yourself.html",   label: "Check yourself" },
            { file: "20-connects.html",         label: "Connects to" }
          ]
        },
        {
          id: "ch02", num: 2, dir: "chapters/ch02-systems-foundations",
          title: "Systems Foundations for LLMs",
          desc: "GPU architecture, memory hierarchies, distributed training (FSDP, ZeRO), and vLLM serving.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "What's covered" },
            { file: "04-why-gpus.html", label: "Why GPUs" },
            { file: "05-gpu-generations.html", label: "GPU generations" },
            { file: "06-sm-architecture.html", label: "Inside the GPU" },
            { file: "07-memory-hierarchy.html", label: "Memory hierarchy" },
            { file: "08-roofline.html", label: "Compute vs memory" },
            { file: "09-interconnect.html", label: "Interconnects" },
            { file: "10-distributed-training.html", label: "Splitting the work" },
            { file: "11-parallelism-decision.html", label: "Which split" },
            { file: "12-kvcache-problem.html", label: "KV cache problem" },
            { file: "13-pagedattention.html", label: "PagedAttention" },
            { file: "14-continuous-batching.html", label: "Continuous batching" },
            { file: "15-vllm-payoff.html", label: "What vLLM delivers" },
            { file: "16-takeaways.html", label: "Key takeaways" },
            { file: "17-check-yourself.html", label: "Check yourself" },
            { file: "18-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch03", num: 3, dir: "chapters/ch03-rl-intro",
          title: "Introduction to Reinforcement Learning",
          desc: "MDPs, Bellman equations, TD learning, policy gradients, actor-critic, and GAE.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-rl-loop.html", label: "The RL loop" },
            { file: "04-mdp.html", label: "The MDP" },
            { file: "05-value-bellman.html", label: "Value & Bellman" },
            { file: "06-td-learning.html", label: "TD learning" },
            { file: "07-q-learning.html", label: "Q-learning" },
            { file: "08-policy-gradients.html", label: "Policy gradients" },
            { file: "09-actor-critic.html", label: "Actor-critic" },
            { file: "10-gae.html", label: "GAE" },
            { file: "11-evolution.html", label: "REINFORCE to PPO" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        }
      ]
    },
    {
      eyebrow: "PART II", name: "RL Methods for LLMs",
      blurb: "The training and alignment core: how to align, improve, and fine-tune language models.",
      chapters: [
        {
          id: "ch04", num: 4, dir: "chapters/ch04-rl-foundations-lm",
          title: "RL Foundations for Language Models",
          desc: "RLHF and RLVR, generation as an MDP, and the RL-for-language-models pipeline.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-two-paradigms.html", label: "Two paradigms" },
            { file: "04-pipeline.html", label: "RLHF pipeline" },
            { file: "05-reward-model.html", label: "Reward model" },
            { file: "06-kl-leash.html", label: "The KL leash" },
            { file: "07-rlvr.html", label: "RLVR" },
            { file: "08-generation-mdp.html", label: "Generation as decisions" },
            { file: "09-rlhf-vs-rlvr.html", label: "RLHF vs RLVR" },
            { file: "10-takeaways.html", label: "Key takeaways" },
            { file: "11-check-yourself.html", label: "Check yourself" },
            { file: "12-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch05", num: 5, dir: "chapters/ch05-ppo",
          title: "PPO: Proximal Policy Optimization",
          desc: "The clipped surrogate objective, rollout buffers, and the KL penalty.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-loop.html", label: "The PPO loop" },
            { file: "04-the-problem.html", label: "The problem" },
            { file: "05-clipped-objective.html", label: "Clipped objective" },
            { file: "06-advantage.html", label: "The advantage" },
            { file: "07-four-models.html", label: "Four models" },
            { file: "08-kl-penalty.html", label: "The KL penalty" },
            { file: "09-rollout-buffer.html", label: "Rollout buffer" },
            { file: "10-tradeoffs.html", label: "When to use" },
            { file: "11-pitfalls.html", label: "Failure modes" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch06", num: 6, dir: "chapters/ch06-dpo",
          title: "DPO: Direct Preference Optimization",
          desc: "Aligning on preference pairs directly, without a separate reward model.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Why DPO exists" },
            { file: "04-preference-pairs.html", label: "Preference pairs" },
            { file: "05-implicit-reward.html", label: "Implicit reward" },
            { file: "06-the-objective.html", label: "One loss, one job" },
            { file: "07-beta.html", label: "The beta knob" },
            { file: "08-learning-focus.html", label: "What it focuses on" },
            { file: "09-dpo-vs-ppo.html", label: "DPO vs PPO" },
            { file: "10-evolution.html", label: "RLHF to DPO" },
            { file: "11-when-it-fails.html", label: "When DPO fails" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch07", num: 7, dir: "chapters/ch07-grpo",
          title: "GRPO: Group Relative Policy Optimization",
          desc: "Critic-free RL with group-relative rewards, the dominant reasoning baseline.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-loop.html", label: "The GRPO loop" },
            { file: "04-the-problem.html", label: "Why drop the critic" },
            { file: "05-group-sampling.html", label: "Group sampling" },
            { file: "06-group-advantage.html", label: "Group advantage" },
            { file: "07-no-critic.html", label: "No-critic savings" },
            { file: "08-verifiable-rewards.html", label: "Verifiable rewards" },
            { file: "09-deepseek-r1.html", label: "DeepSeek-R1" },
            { file: "10-ppo-vs-grpo.html", label: "PPO vs GRPO" },
            { file: "11-group-size.html", label: "Group size" },
            { file: "12-variants.html", label: "Variants" },
            { file: "13-evolution.html", label: "Evolution" },
            { file: "14-takeaways.html", label: "Key takeaways" },
            { file: "15-check-yourself.html", label: "Check yourself" },
            { file: "16-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch08", num: 8, dir: "chapters/ch08-preference-variants",
          title: "Preference Optimization Variants",
          desc: "Online DPO, KTO, IPO, ORPO, SimPO, and Best-of-N.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Map of variants" },
            { file: "04-online-dpo.html", label: "Online DPO" },
            { file: "05-kto.html", label: "KTO" },
            { file: "06-ipo.html", label: "IPO" },
            { file: "07-orpo-simpo.html", label: "ORPO & SimPO" },
            { file: "08-best-of-n.html", label: "Best-of-N" },
            { file: "09-compare.html", label: "Side by side" },
            { file: "10-which-when.html", label: "Which one, when" },
            { file: "11-takeaways.html", label: "Key takeaways" },
            { file: "12-check-yourself.html", label: "Check yourself" },
            { file: "13-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch09", num: 9, dir: "chapters/ch09-reward-models",
          title: "Reward Model Training",
          desc: "Bradley-Terry models, scaling laws, and reward hacking.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Where the RM sits" },
            { file: "04-bradley-terry.html", label: "Bradley-Terry" },
            { file: "05-training-rm.html", label: "Training the RM" },
            { file: "06-reward-tricks.html", label: "Centering & bias" },
            { file: "07-reward-hacking.html", label: "Reward hacking" },
            { file: "08-prm-orm.html", label: "PRM vs ORM" },
            { file: "09-prm-orm-compare.html", label: "When to use each" },
            { file: "10-multi-objective.html", label: "Multi-objective" },
            { file: "11-takeaways.html", label: "Key takeaways" },
            { file: "12-check-yourself.html", label: "Check yourself" },
            { file: "13-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch10", num: 10, dir: "chapters/ch10-sft",
          title: "SFT Best Practices and Techniques",
          desc: "Data quality, sequence packing, completion masking, and curriculum.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Where SFT sits" },
            { file: "04-completion-masking.html", label: "Completion masking" },
            { file: "05-data-quality.html", label: "Quality over quantity" },
            { file: "06-sequence-packing.html", label: "Sequence packing" },
            { file: "07-chat-templates.html", label: "Chat templates" },
            { file: "08-epochs.html", label: "How long to train" },
            { file: "09-forgetting.html", label: "Forgetting" },
            { file: "10-alignment-tax.html", label: "The alignment tax" },
            { file: "11-best-practices.html", label: "Best practices" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch11", num: 11, dir: "chapters/ch11-infra-scale",
          title: "System Architecture & Infrastructure at Scale",
          desc: "Decoupled training, fault tolerance, and GPU allocation.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-four-models.html", label: "Four-model challenge" },
            { file: "04-memory-wall.html", label: "The memory wall" },
            { file: "05-fsdp-zero.html", label: "FSDP / ZeRO" },
            { file: "06-tensor-parallel.html", label: "Tensor parallelism" },
            { file: "07-pipeline-parallel.html", label: "Pipeline parallelism" },
            { file: "08-which-parallelism.html", label: "Which split when" },
            { file: "09-generation-bottleneck.html", label: "Gen vs train" },
            { file: "10-decoupled.html", label: "Decoupled design" },
            { file: "11-gpu-allocation.html", label: "GPU allocation" },
            { file: "12-fault-tolerance.html", label: "Fault tolerance" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch12", num: 12, dir: "chapters/ch12-agentic-training",
          title: "LLM Agentic Training",
          desc: "Training agents end-to-end with trajectory-level RL.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Act-observe loop" },
            { file: "04-trajectory.html", label: "What a trajectory is" },
            { file: "05-trajectory-rl.html", label: "Trajectory-level RL" },
            { file: "06-credit-assignment.html", label: "Credit assignment" },
            { file: "07-star.html", label: "STaR" },
            { file: "08-reflexion.html", label: "Reflexion" },
            { file: "09-react.html", label: "ReAct" },
            { file: "10-voyager-lats.html", label: "Voyager & LATS" },
            { file: "11-evolution.html", label: "Evolution" },
            { file: "12-rlef.html", label: "RLEF" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        }
      ]
    },
    {
      eyebrow: "PART III", name: "Reasoning",
      blurb: "The frontier of capability: teaching models to reason through multi-step problems.",
      chapters: [
        {
          id: "ch13", num: 13, dir: "chapters/ch13-reasoning-models",
          title: "RL for Large Reasoning Models",
          desc: "DeepSeek-R1 and o1/o3: how RL discovers chain-of-thought, MCTS, and test-time compute.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-think-then-answer.html", label: "Think then answer" },
            { file: "04-test-time-compute.html", label: "Test-time compute" },
            { file: "05-chain-of-thought.html", label: "Chain-of-thought" },
            { file: "06-guess-vs-vote.html", label: "Guess vs vote" },
            { file: "07-self-consistency.html", label: "Self-consistency" },
            { file: "08-tree-search.html", label: "Tree search & MCTS" },
            { file: "09-process-rewards.html", label: "Process rewards" },
            { file: "10-evolution-ladder.html", label: "Evolution ladder" },
            { file: "11-rlvr-milestone.html", label: "R1 & o1 milestone" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        }
      ]
    },
    {
      eyebrow: "PART IV", name: "Evaluation",
      blurb: "How to measure whether any of this actually works.",
      chapters: [
        {
          id: "ch14", num: 14, dir: "chapters/ch14-evaluation",
          title: "LLM Evaluation",
          desc: "Metrics, LLM-as-Judge, contamination detection, and agentic evaluation.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-hard.html", label: "Why it is hard" },
            { file: "04-perplexity.html", label: "Perplexity" },
            { file: "05-passk.html", label: "Pass@k" },
            { file: "06-elo.html", label: "ELO & ranking" },
            { file: "07-llm-judge.html", label: "LLM-as-Judge" },
            { file: "08-judge-bias.html", label: "Judge biases" },
            { file: "09-contamination.html", label: "Contamination" },
            { file: "10-benchmarks.html", label: "Benchmark suites" },
            { file: "11-agentic.html", label: "Agentic success" },
            { file: "12-which-metric.html", label: "Which metric when" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        }
      ]
    },
    {
      eyebrow: "PART V", name: "Agentic AI",
      blurb: "From a trained model to a deployed autonomous system. The largest part of the book.",
      chapters: [
        {
          id: "ch15", num: 15, dir: "chapters/ch15-intro-agentic",
          title: "Introduction to Agentic AI",
          desc: "What makes a system agentic: the spectrum from chatbot to autonomous agent.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-loop.html", label: "Perceive-reason-act" },
            { file: "04-chatbot-vs-agent.html", label: "Chatbot vs agent" },
            { file: "05-autonomy-spectrum.html", label: "Autonomy spectrum" },
            { file: "06-agentic-stack.html", label: "The agentic stack" },
            { file: "07-five-challenges.html", label: "Five challenges" },
            { file: "08-systems-not-prompting.html", label: "A systems discipline" },
            { file: "09-takeaways.html", label: "Key takeaways" },
            { file: "10-check-yourself.html", label: "Check yourself" },
            { file: "11-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch16", num: 16, dir: "chapters/ch16-rag",
          title: "Retrieval-Augmented Generation (RAG)",
          desc: "Retrieval, chunking, embedding models, hybrid search, and reranking.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-rag.html", label: "Why outside knowledge" },
            { file: "04-pipeline.html", label: "The RAG pipeline" },
            { file: "05-chunking.html", label: "Chunking" },
            { file: "06-embeddings.html", label: "Embeddings & search" },
            { file: "07-hybrid-rrf.html", label: "Hybrid search & RRF" },
            { file: "08-reranking.html", label: "Reranking" },
            { file: "09-query-transform.html", label: "Query transformation" },
            { file: "10-agentic-rag.html", label: "Agentic RAG" },
            { file: "11-rag-vs-finetuning.html", label: "RAG vs fine-tuning" },
            { file: "12-failure-modes.html", label: "Failure modes" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch17", num: 17, dir: "chapters/ch17-memory",
          title: "Agentic Memory Systems",
          desc: "Working, episodic, semantic, and procedural memory for persistent agents.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-memory.html", label: "Why memory" },
            { file: "04-failure-modes.html", label: "Without memory" },
            { file: "05-memory-types.html", label: "Four memory types" },
            { file: "06-classification-example.html", label: "All four at once" },
            { file: "07-operations.html", label: "Four operations" },
            { file: "08-write.html", label: "Write" },
            { file: "09-reflect.html", label: "Reflect" },
            { file: "10-memgpt.html", label: "MemGPT tiering" },
            { file: "11-architectures.html", label: "Storage designs" },
            { file: "12-systems.html", label: "Systems" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch18", num: 18, dir: "chapters/ch18-harness",
          title: "Agent Harness: Context Management and Orchestration",
          desc: "ReAct, Plan-and-Execute, reflexion, context budgets, and harness design.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Harness as OS" },
            { file: "04-react-loop.html", label: "The ReAct loop" },
            { file: "05-context-budget.html", label: "Context budget" },
            { file: "06-compaction.html", label: "Compaction" },
            { file: "07-tool-dispatch.html", label: "Tool dispatch" },
            { file: "08-plan-execute.html", label: "Plan and execute" },
            { file: "09-loop-detection.html", label: "Loop detection" },
            { file: "10-human-in-loop.html", label: "Human in the loop" },
            { file: "11-observability.html", label: "Observability" },
            { file: "12-patterns-compare.html", label: "Patterns compared" },
            { file: "13-state.html", label: "State management" },
            { file: "14-takeaways.html", label: "Key takeaways" },
            { file: "15-check-yourself.html", label: "Check yourself" },
            { file: "16-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch19", num: 19, dir: "chapters/ch19-design-patterns",
          title: "Agent Design Patterns",
          desc: "Prompt chaining, routing, parallelization, and the simplicity principle.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-pattern-map.html", label: "The pattern map" },
            { file: "04-prompt-chaining.html", label: "Prompt chaining" },
            { file: "05-routing.html", label: "Routing" },
            { file: "06-parallelization.html", label: "Parallelization" },
            { file: "07-orchestrator-workers.html", label: "Orchestrator-workers" },
            { file: "08-evaluator-optimizer.html", label: "Evaluator-optimizer" },
            { file: "09-simplicity.html", label: "Simplicity principle" },
            { file: "10-when-to-use.html", label: "When to use what" },
            { file: "11-takeaways.html", label: "Key takeaways" },
            { file: "12-check-yourself.html", label: "Check yourself" },
            { file: "13-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch20", num: 20, dir: "chapters/ch20-environments",
          title: "Agentic Environments and Benchmarks",
          desc: "WebArena, SWE-bench, OSWorld, and GAIA.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-orientation.html", label: "Why they matter" },
            { file: "04-sandbox.html", label: "The sandbox idea" },
            { file: "05-design-axes.html", label: "A good environment" },
            { file: "06-execution-reward.html", label: "Execution reward" },
            { file: "07-tour-divider.html", label: "Benchmark tour" },
            { file: "08-webarena.html", label: "WebArena" },
            { file: "09-swebench.html", label: "SWE-bench" },
            { file: "10-osworld.html", label: "OSWorld" },
            { file: "11-gaia.html", label: "GAIA" },
            { file: "12-catalog.html", label: "Four worlds" },
            { file: "13-good-benchmark.html", label: "Good benchmarks" },
            { file: "14-takeaways.html", label: "Key takeaways" },
            { file: "15-check-yourself.html", label: "Check yourself" },
            { file: "16-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch21", num: 21, dir: "chapters/ch21-mcp",
          title: "Model Context Protocol (MCP)",
          desc: "Tool, resource, and prompt primitives, transport, security, and deployment.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-integration-problem.html", label: "Integration problem" },
            { file: "04-scaling-cost.html", label: "Quadratic to linear" },
            { file: "05-usb-c.html", label: "USB-C for tools" },
            { file: "06-three-roles.html", label: "Three roles" },
            { file: "07-request-path.html", label: "Request path" },
            { file: "08-four-primitives.html", label: "Four primitives" },
            { file: "09-tools-detail.html", label: "Tools in detail" },
            { file: "10-transport.html", label: "Transport" },
            { file: "11-security.html", label: "Security & trust" },
            { file: "12-example.html", label: "Worked example" },
            { file: "13-before-after.html", label: "MCP vs custom" },
            { file: "14-takeaways.html", label: "Key takeaways" },
            { file: "15-check-yourself.html", label: "Check yourself" },
            { file: "16-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch22", num: 22, dir: "chapters/ch22-skills",
          title: "Agent Skills",
          desc: "Skill libraries, tool composition, and capability abstraction.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-augmented-llm.html", label: "Augmented LLM" },
            { file: "04-what-a-skill-packages.html", label: "What a skill packs" },
            { file: "05-tool-skill-agent.html", label: "Tool / skill / agent" },
            { file: "06-static-vs-dynamic.html", label: "Static vs dynamic" },
            { file: "07-tool-composition.html", label: "Tool composition" },
            { file: "08-capability-abstraction.html", label: "Capability abstraction" },
            { file: "09-skill-libraries.html", label: "Skill libraries" },
            { file: "10-when-to-make-a-skill.html", label: "When to make a skill" },
            { file: "11-takeaways.html", label: "Key takeaways" },
            { file: "12-check-yourself.html", label: "Check yourself" },
            { file: "13-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch23", num: 23, dir: "chapters/ch23-a2a",
          title: "Agent-to-Agent Communication (A2A)",
          desc: "Agent Cards, task lifecycle, streaming, and enterprise patterns.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-talk.html", label: "Why agents talk" },
            { file: "04-five-requirements.html", label: "Five requirements" },
            { file: "05-protocol.html", label: "The A2A protocol" },
            { file: "06-agent-cards.html", label: "Agent Cards" },
            { file: "07-task-lifecycle.html", label: "Task lifecycle" },
            { file: "08-streaming.html", label: "Streaming" },
            { file: "09-discovery-routing.html", label: "Discovery & routing" },
            { file: "10-auth-trust.html", label: "Security & trust" },
            { file: "11-a2a-vs-mcp.html", label: "A2A vs MCP" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch24", num: 24, dir: "chapters/ch24-multi-agent",
          title: "Multi-Agent Systems",
          desc: "Hierarchical, debate, marketplace, and swarm architectures.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-one-vs-many.html", label: "One vs many" },
            { file: "04-supervisor-hierarchical.html", label: "Supervisor" },
            { file: "05-debate.html", label: "Debate" },
            { file: "06-marketplace.html", label: "Marketplace" },
            { file: "07-swarm-handoffs.html", label: "Swarm & handoffs" },
            { file: "08-coordination-challenges.html", label: "Coordination cost" },
            { file: "09-communication.html", label: "Communication" },
            { file: "10-ctde.html", label: "CTDE" },
            { file: "11-which-when.html", label: "Which when" },
            { file: "12-when-not.html", label: "When not to" },
            { file: "13-takeaways.html", label: "Key takeaways" },
            { file: "14-check-yourself.html", label: "Check yourself" },
            { file: "15-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch25", num: 25, dir: "chapters/ch25-frameworks",
          title: "Agent Development Frameworks",
          desc: "LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, and Google ADK.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-frameworks.html", label: "The engineering gap" },
            { file: "04-what-it-gives.html", label: "What it gives you" },
            { file: "05-langgraph.html", label: "LangGraph" },
            { file: "06-crewai.html", label: "CrewAI" },
            { file: "07-autogen.html", label: "AutoGen" },
            { file: "08-firstparty.html", label: "First-party SDKs" },
            { file: "09-dspy-sk.html", label: "DSPy & SK" },
            { file: "10-spectrum.html", label: "Control vs convenience" },
            { file: "11-choose.html", label: "How to choose" },
            { file: "12-testing-why.html", label: "Why testing is hard" },
            { file: "13-testing-layers.html", label: "Testing layers" },
            { file: "14-takeaways.html", label: "Key takeaways" },
            { file: "15-check-yourself.html", label: "Check yourself" },
            { file: "16-connects.html", label: "Connects to" }
          ]
        },
        {
          id: "ch26", num: 26, dir: "chapters/ch26-agentic-ui",
          title: "Agentic UI Frameworks",
          desc: "Streaming interfaces, generative UI, and human-in-the-loop patterns.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "Core idea" },
            { file: "03-why-different.html", label: "Why agent UIs differ" },
            { file: "04-streaming.html", label: "Streaming" },
            { file: "05-generative-ui.html", label: "Generative UI" },
            { file: "06-canvas.html", label: "Canvas" },
            { file: "07-tool-viz.html", label: "Tool-call viz" },
            { file: "08-approval-gates.html", label: "Approval gates" },
            { file: "09-tiered-approval.html", label: "Tiered approval" },
            { file: "10-paradigm-spectrum.html", label: "Paradigm spectrum" },
            { file: "11-trust.html", label: "Trust & transparency" },
            { file: "12-takeaways.html", label: "Key takeaways" },
            { file: "13-check-yourself.html", label: "Check yourself" },
            { file: "14-connects.html", label: "Connects to" }
          ]
        }
      ]
    },
    {
      eyebrow: "PART VI", name: "Assessment & Reference",
      blurb: "Quiz questions with detailed answers, a quick reference, and a look ahead.",
      chapters: [
        {
          id: "ch27", num: 27, dir: "chapters/ch27-quiz",
          title: "Quiz Questions & Detailed Answers",
          desc: "108 quiz questions with comprehensive answers spanning all topics.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-how-to-use.html", label: "How to use" },
            { file: "03-foundations.html", label: "Foundations" },
            { file: "04-systems-gpus.html", label: "Systems & GPUs" },
            { file: "05-rl-methods.html", label: "RL methods" },
            { file: "06-rewards-variants.html", label: "Rewards & variants" },
            { file: "07-reasoning.html", label: "Reasoning" },
            { file: "08-evaluation.html", label: "Evaluation" },
            { file: "09-agentic-core.html", label: "Agentic core" },
            { file: "10-protocols.html", label: "Tools & protocols" },
            { file: "11-multi-agent.html", label: "Multi-agent" },
            { file: "12-mixed-review.html", label: "Mixed review" },
            { file: "13-closing.html", label: "Closing" }
          ]
        },
        {
          id: "ch28", num: 28, dir: "chapters/ch28-quick-reference",
          title: "Quick Reference",
          desc: "Key equations, architecture specs, and failure-mode diagnostics.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-how-to-use.html", label: "How to use" },
            { file: "03-llm-internals.html", label: "LLM internals" },
            { file: "04-training-defaults.html", label: "Training defaults" },
            { file: "05-rl-picker.html", label: "RL method picker" },
            { file: "06-decoding-picker.html", label: "Decoding picker" },
            { file: "07-agentic-stack.html", label: "The agentic stack" },
            { file: "08-protocols.html", label: "MCP and A2A" },
            { file: "09-build-decisions.html", label: "Build decisions" },
            { file: "10-failure-modes.html", label: "Failure modes" },
            { file: "11-eval-targets.html", label: "Eval targets" },
            { file: "12-closing.html", label: "Closing" }
          ]
        },
        {
          id: "ch29", num: 29, dir: "chapters/ch29-conclusion",
          title: "Conclusion and Future Directions",
          desc: "Open challenges and where the field is heading.",
          active: true,
          slides: [
            { file: "01-cover.html", label: "Cover" },
            { file: "02-core-idea.html", label: "One arc" },
            { file: "03-journey.html", label: "Journey recap" },
            { file: "04-systems-problem.html", label: "Systems problem" },
            { file: "05-lessons.html", label: "Recurring lessons" },
            { file: "06-open-challenges.html", label: "Open challenges" },
            { file: "07-multi-agent-future.html", label: "Economy of agents" },
            { file: "08-future-directions.html", label: "Future directions" },
            { file: "09-further-learning.html", label: "Where to go next" },
            { file: "10-takeaways.html", label: "Key takeaways" },
            { file: "11-closing.html", label: "Thank you" }
          ]
        }
      ]
    }
  ]
};
