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
        { id: "ch02", num: 2, title: "Systems Foundations for LLMs", desc: "GPU architecture, memory hierarchies, distributed training (FSDP, ZeRO), and vLLM serving.", active: false },
        { id: "ch03", num: 3, title: "Introduction to Reinforcement Learning", desc: "MDPs, Bellman equations, TD learning, policy gradients, actor-critic, and GAE.", active: false }
      ]
    },
    {
      eyebrow: "PART II", name: "RL Methods for LLMs",
      blurb: "The training and alignment core: how to align, improve, and fine-tune language models.",
      chapters: [
        { id: "ch04", num: 4,  title: "RL Foundations for Language Models", desc: "RLHF and RLVR, generation as an MDP, and the RL-for-language-models pipeline.", active: false },
        { id: "ch05", num: 5,  title: "PPO: Proximal Policy Optimization", desc: "The clipped surrogate objective, rollout buffers, and the KL penalty.", active: false },
        { id: "ch06", num: 6,  title: "DPO: Direct Preference Optimization", desc: "Aligning on preference pairs directly, without a separate reward model.", active: false },
        { id: "ch07", num: 7,  title: "GRPO: Group Relative Policy Optimization", desc: "Critic-free RL with group-relative rewards, the dominant reasoning baseline.", active: false },
        { id: "ch08", num: 8,  title: "Preference Optimization Variants", desc: "Online DPO, KTO, IPO, ORPO, SimPO, and Best-of-N.", active: false },
        { id: "ch09", num: 9,  title: "Reward Model Training", desc: "Bradley-Terry models, scaling laws, and reward hacking.", active: false },
        { id: "ch10", num: 10, title: "SFT Best Practices and Techniques", desc: "Data quality, sequence packing, completion masking, and curriculum.", active: false },
        { id: "ch11", num: 11, title: "System Architecture & Infrastructure at Scale", desc: "Decoupled training, fault tolerance, and GPU allocation.", active: false },
        { id: "ch12", num: 12, title: "LLM Agentic Training", desc: "Training agents end-to-end with trajectory-level RL.", active: false }
      ]
    },
    {
      eyebrow: "PART III", name: "Reasoning",
      blurb: "The frontier of capability: teaching models to reason through multi-step problems.",
      chapters: [
        { id: "ch13", num: 13, title: "RL for Large Reasoning Models", desc: "DeepSeek-R1 and o1/o3: how RL discovers chain-of-thought, MCTS, and test-time compute.", active: false }
      ]
    },
    {
      eyebrow: "PART IV", name: "Evaluation",
      blurb: "How to measure whether any of this actually works.",
      chapters: [
        { id: "ch14", num: 14, title: "LLM Evaluation", desc: "Metrics, LLM-as-Judge, contamination detection, and agentic evaluation.", active: false }
      ]
    },
    {
      eyebrow: "PART V", name: "Agentic AI",
      blurb: "From a trained model to a deployed autonomous system. The largest part of the book.",
      chapters: [
        { id: "ch15", num: 15, title: "Introduction to Agentic AI", desc: "What makes a system agentic: the spectrum from chatbot to autonomous agent.", active: false },
        { id: "ch16", num: 16, title: "Retrieval-Augmented Generation (RAG)", desc: "Retrieval, chunking, embedding models, hybrid search, and reranking.", active: false },
        { id: "ch17", num: 17, title: "Agentic Memory Systems", desc: "Working, episodic, semantic, and procedural memory for persistent agents.", active: false },
        { id: "ch18", num: 18, title: "Agent Harness: Context Management and Orchestration", desc: "ReAct, Plan-and-Execute, reflexion, context budgets, and harness design.", active: false },
        { id: "ch19", num: 19, title: "Agent Design Patterns", desc: "Prompt chaining, routing, parallelization, and the simplicity principle.", active: false },
        { id: "ch20", num: 20, title: "Agentic Environments and Benchmarks", desc: "WebArena, SWE-bench, OSWorld, and GAIA.", active: false },
        { id: "ch21", num: 21, title: "Model Context Protocol (MCP)", desc: "Tool, resource, and prompt primitives, transport, security, and deployment.", active: false },
        { id: "ch22", num: 22, title: "Agent Skills", desc: "Skill libraries, tool composition, and capability abstraction.", active: false },
        { id: "ch23", num: 23, title: "Agent-to-Agent Communication (A2A)", desc: "Agent Cards, task lifecycle, streaming, and enterprise patterns.", active: false },
        { id: "ch24", num: 24, title: "Multi-Agent Systems", desc: "Hierarchical, debate, marketplace, and swarm architectures.", active: false },
        { id: "ch25", num: 25, title: "Agent Development Frameworks", desc: "LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, and Google ADK.", active: false },
        { id: "ch26", num: 26, title: "Agentic UI Frameworks", desc: "Streaming interfaces, generative UI, and human-in-the-loop patterns.", active: false }
      ]
    },
    {
      eyebrow: "PART VI", name: "Assessment & Reference",
      blurb: "Quiz questions with detailed answers, a quick reference, and a look ahead.",
      chapters: [
        { id: "ch27", num: 27, title: "Quiz Questions & Detailed Answers", desc: "108 quiz questions with comprehensive answers spanning all topics.", active: false },
        { id: "ch28", num: 28, title: "Quick Reference", desc: "Key equations, architecture specs, and failure-mode diagnostics.", active: false },
        { id: "ch29", num: 29, title: "Conclusion and Future Directions", desc: "Open challenges and where the field is heading.", active: false }
      ]
    }
  ]
};
