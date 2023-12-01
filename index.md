<html>
<head>
<style>
    .figure{float:left;width:30%;}
    .figure img{display:block;width:75%}
    .text{float:right;width:70%}
</style>
</head>
<body>
    <div class="figure">
        <img src="/images/personal.BMP">
    </div>
    <div class="text">
        <p><b>Ji Qi</b> &nbsp;&nbsp;&nbsp; <b>齐济</b></p>
        <p>Ph.D. Student</p>
        <p>Tsinghua University</p>
        <p>Email: qijimrc@gmail.com</p>
        <br>
    </div>
</body>
</html>

<!-- ## About Me ([CV](/files/cv.jpeg)) -->
## About Me
I am currently a Ph.D. Student at Tsinghua University. My research interests involves Vision-Language Understanding and Knowledge Engineering.



## Publications
- **Ji Qi**, Kaixuan Ji, Jifan Yu, Duokang Wang, Bin Xu, Lei Hou, Juanzi Li. BiLL-VTG: Bridging Large Language Models and Lightweight Visual Tools for Video-based Texts Generation. [[arxiv](https://arxiv.org/pdf/2310.10586)][[paper](https://arxiv.org/pdf/2310.10586)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre>
    </details>

- **Ji Qi**, Kaixuan Ji, Xiaozhi Wang, Jifan Yu, Kaisheng Zeng, Lei Hou, Juanzi Li, Bin Xu. Mastering the Task of Open Information Extraction with Large Language Models and Consistent Reasoning Environment. [[arxiv](https://arxiv.org/pdf/2310.10590)][[paper](https://arxiv.org/pdf/2310.10590)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre>
    </details>

- **Ji Qi**, Chuchun Zhang, Xiaozhi Wang, Kaisheng Zeng, Jifan Yu, Jinxin Liu, Jiuding Sun, Yuxiang Chen, Lei How, Juanzi Li, Bin Xu. Preserving Knowledge Invariance: Rethinking Robustness Evaluation of Open Information Extraction. [[arxiv](https://arxiv.org/abs/2305.13981)][[paper](https://arxiv.org/pdf/2305.13981.pdf)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre>
    </details>

- **Ji Qi**, Jifan Yu, Teng Tu, Kunyu Gao, Yifan Xu, Xinyu Guan, Xiaozhi Wang, Bin Xu, Lei Hou, Juanzi Li, Jie Tang. GOAL: A Challenging Knowledge-grounded Video Captioning Benchmark for Real-time Soccer Commentary Generation. [[arxiv](https://arxiv.org/abs/2303.14655)][[code](https://github.com/THU-KEG/goal)][[paper](https://arxiv.org/pdf/2303.14655.pdf)]
    <details>
    <summary>Summary</summary>
    Despite the recent emergence of video captioning models, how to generate vivid, fine-grained video descriptions based on the background knowledge (i.e., long and informative commentary about the domain-specific scenes with appropriate reasoning) is still far from being solved, which however has great applications such as automatic sports narrative. Based on soccer game videos and synchronized commentary data, we present GOAL, a benchmark of over 8.9k soccer video clips, 22k sentences, and 42k knowledge triples for proposing a challenging new task setting as Knowledge-grounded Video Captioning (KGVC). We experimentally test existing state-of-the-art (SOTA) methods on this resource to demonstrate the future directions for improvement in this challenging task. We hope that our data resource can serve researchers and developers interested in knowledge-grounded cross-modal applications.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>

- **Ji Qi**, Yuxiang Chen, Lei Hou, Juanzi Li, Bin Xu. Syntactically Robust Training on Partially-Observed Data for Open Information Extraction. Findings of the Association for Computational Linguistics: **EMNLP**, 2022. [[arxiv](https://arxiv.org/abs/2301.06841)][[code](https://github.com/qijimrc/RobustOIE)][[paper](https://aclanthology.org/2022.findings-emnlp.465.pdf)]
    <details>
    <summary>Summary</summary>
    Open Information Extraction models have shown promising results with sufficient supervision. However, these models face a fundamental challenge that the syntactic distribution of training data is partially observable in comparison to the real world. In this paper, we propose a syntactically robust training framework that enables models to be trained on a syntactic-abundant distribution based on diverse paraphrase generation. To tackle the intrinsic problem of knowledge deformation of paraphrasing, two algorithms based on semantic similarity matching and syntactic tree walking are used to restore the expressionally transformed knowledge. The training framework can be generally applied to other syntactic partial observable domains. Based on the proposed framework, we build a new evaluation set called CaRB-AutoPara, a syntactically diverse dataset consistent with the real-world setting for validating the robustness of the models. Experiments including a thorough analysis show that the performance of the model degrades with the increase of the difference in syntactic distribution, while our framework gives a robust boundary. The source code is publicly available at https://github.com/qijimrc/RobustOIE.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>

- Jinxin Liu, Jiaxin Shi, **Ji Qi**, Lei Hou, Juanzi Li, Qi Tian. ParaMac: A General Unsupervised Paraphrase Generation Framework Leveraging Semantic Constraints and Diversifying Mechanisms. Findings of the Association for Computational Linguistics: **EMNLP**, 2022. [[code](https://github.com/Matthewlliu/UnsupervisedParaphrase)][[paper](https://aclanthology.org/2022.findings-emnlp.461.pdf)]
    <details>
    <summary>Summary</summary>
    Paraphrase generation reflects the ability to understand the meaning from the language surface form and rephrase it to other expressions. Recent paraphrase generation works have paid attention to unsupervised approaches based on Pre-trained Language Models (PLMs) to avoid heavy reliance on parallel data by utilizing PLMs’ generation ability. However, the generated pairs of existing unsupervised methods are usually weak either in semantic equivalence or expression diversity. In this paper, we present a novel unsupervised paraphrase generation framework called Paraphrase Machine. By employing multi-aspect equivalence constraints and multi-granularity diversifying mechanisms, Paraphrase Machine is able to achieve good semantic equivalence and expressive diversity, producing a high-quality unsupervised paraphrase dataset. Based on this dataset, we train a general paraphrase model, which can be directly applied to rewrite the input sentence of various domains without any fine-tuning, and achieves substantial gains of 9.1% and 3.3% absolutely in BLEU score over previous SOTA on Quora and MSCOCO. By further fine-tuning our model with domain-specific training sets, the improvement can be increased to even 18.0% and 4.6%. Most importantly, by applying it to language understanding and generation tasks under the low-resource setting, we demonstrate that our model can serve as a universal data augmentor to boost the few-shot performance (eg, average 2.0% gain on GLUE).
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>

- **Ji Qi**, Bin Xu, Kaisheng Zeng, Jinxin Liu, Jifan Yu, Qi Gao, Juanzi Li, Lei Hou. ConstGCN: Constrained Transmission-based Graph Convolutional Networks for Document-level Relation Extraction. [[arxiv](https://arxiv.org/abs/2210.03949)][[paper](https://arxiv.org/pdf/2210.03949.pdf)]
    <details>
    <summary>Summary</summary>
    Document-level relation extraction with graph neural networks faces a fundamental graph construction gap between training and inference - the golden graph structure only available during training, which causes that most methods adopt heuristic or syntactic rules to construct a prior graph as a pseudo proxy. In this paper, we propose ConstGCN, a novel graph convolutional network which performs knowledge-based information propagation between entities along with all specific relation spaces without any prior graph construction. Specifically, it updates the entity representation by aggregating information from all other entities along with each relation space, thus modeling the relation-aware spatial information. To control the information flow passing through the indeterminate relation spaces, we propose to constrain the propagation using transmitting scores learned from the Noise Contrastive Estimation between fact triples. Experimental results show that our method outperforms the previous state-of-the-art (SOTA) approaches on the DocRE dataset.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>


