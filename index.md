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
I am currently a Ph.D. Student at Tsinghua University. My research interests involve Vision-Language Understanding and Knowledge Engineering.



## Publications
- **Ji Qi**, Ming Ding, Weihan Wang, Yushi Bai, Qingsong Lv, Wenyi Hong, Bin Xu, Lei Hou, Juanzi Li, Yuxiao Dong, Jie Tang. &ensp; *CogCoM: Train Large Vision-Language Models Diving into Details through Chain of Manipulations.* [[arxiv](https://arxiv.org/pdf/2402.04236.pdf)][[code](https://github.com/THUDM/CogCoM)]
    <details open>
    <summary>Summary</summary>
    Vision-Language Models (VLMs) have demonstrated their widespread viability thanks to extensive training in aligning visual instructions to answers. However, this conclusive alignment leads models to ignore critical visual reasoning, and further result in failures on meticulous visual problems and unfaithful responses. In this paper, we propose Chain of Manipulations, a mechanism that enables VLMs to solve problems with a series of manipulations, where each manipulation refers to an operation on the visual input, either from intrinsic abilities (e.g., grounding) acquired through prior training or from imitating humanlike behaviors (e.g., zoom in). This mechanism encourages VLMs to generate faithful responses with evidential visual reasoning, and permits users to trace error causes in the interpretable paths. We thus train CogCoM, a general 17B VLM with a memory-based compatible architecture endowed this reasoning mechanism. Experiments show that our model achieves the state-of-the-art performance across 8 benchmarks from 3 categories, and a limited number of training steps with the data swiftly gains a competitive performance.
    <pre><center><img src="/images/cogcom_case.jpg" width="100%"></center></pre>
    </details>

- **Ji Qi**, Kaixuan Ji, Jifan Yu, Duokang Wang, Bin Xu, Lei Hou, Juanzi Li. &ensp; *BiLL-VTG: Bridging Large Language Models and Lightweight Visual Tools for Video-based Texts Generation.* [[arxiv](https://arxiv.org/pdf/2310.10586)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    </details>

- **Ji Qi**, Kaixuan Ji, Xiaozhi Wang, Jifan Yu, Kaisheng Zeng, Lei Hou, Juanzi Li, Bin Xu. &ensp; *Mastering the Task of Open Information Extraction with Large Language Models and Consistent Reasoning Environment.* [[arxiv](https://arxiv.org/pdf/2310.10590)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    </details>

- **Ji Qi**, Chuchun Zhang, Xiaozhi Wang, Kaisheng Zeng, Jifan Yu, Jinxin Liu, Jiuding Sun, Yuxiang Chen, Lei How, Juanzi Li, Bin Xu. &ensp; *Preserving Knowledge Invariance: Rethinking Robustness Evaluation of Open Information Extraction.* &ensp; **EMNLP 2023**. <span style="color:#C70039">**Outstanding Paper Award**</span>. [[arxiv](https://arxiv.org/abs/2305.13981)][[paper](https://aclanthology.org/2023.emnlp-main.360/)][[code](https://github.com/qijimrc/ROBUST)]
    <details>
    <summary>Summary</summary>
    The robustness to distribution changes ensures that NLP models can be successfully applied in the realistic world, especially for information extraction tasks. However, most prior evaluation benchmarks have been devoted to validating pairwise matching correctness, ignoring the crucial measurement of robustness. In this paper, we present the first benchmark that simulates the evaluation of open information extraction models in the real world, where the syntactic and expressive distributions under the same knowledge meaning may drift variously. We design and annotate a large-scale testbed in which each example is a knowledge-invariant clique that consists of sentences with structured knowledge of the same meaning but with different syntactic and expressive forms. By further elaborating the robustness metric, a model is judged to be robust if its performance is consistently accurate on the overall cliques. We perform experiments on typical models published in the last decade as well as a popular large language model, the results show that the existing successful models exhibit a frustrating degradation, with a maximum drop of 23.43 F1 score. Our resources and code will be publicly available.
    <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre>
    </details>

- **Ji Qi**, Jifan Yu, Teng Tu, Kunyu Gao, Yifan Xu, Xinyu Guan, Xiaozhi Wang, Bin Xu, Lei Hou, Juanzi Li, Jie Tang. &ensp; *GOAL: A Challenging Knowledge-grounded Video Captioning Benchmark for Real-time Soccer Commentary Generation.* &ensp; **CIKM 2023**. [[arxiv](https://arxiv.org/abs/2303.14655)][[paper](https://arxiv.org/pdf/2303.14655.pdf)][[code](https://github.com/THU-KEG/goal)]
    <details>
    <summary>Summary</summary>
    Despite the recent emergence of video captioning models, how to generate vivid, fine-grained video descriptions based on the background knowledge (i.e., long and informative commentary about the domain-specific scenes with appropriate reasoning) is still far from being solved, which however has great applications such as automatic sports narrative. Based on soccer game videos and synchronized commentary data, we present GOAL, a benchmark of over 8.9k soccer video clips, 22k sentences, and 42k knowledge triples for proposing a challenging new task setting as Knowledge-grounded Video Captioning (KGVC). We experimentally test existing state-of-the-art (SOTA) methods on this resource to demonstrate the future directions for improvement in this challenging task. We hope that our data resource can serve researchers and developers interested in knowledge-grounded cross-modal applications.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>

- **Ji Qi**, Yuxiang Chen, Lei Hou, Juanzi Li, Bin Xu. &ensp; *Syntactically Robust Training on Partially-Observed Data for Open Information Extraction.* &ensp; **EMNLP 2022**. [[arxiv](https://arxiv.org/abs/2301.06841)][[paper](https://aclanthology.org/2022.findings-emnlp.465.pdf)][[code](https://github.com/qijimrc/RobustOIE)]
    <details>
    <summary>Summary</summary>
    Open Information Extraction models have shown promising results with sufficient supervision. However, these models face a fundamental challenge that the syntactic distribution of training data is partially observable in comparison to the real world. In this paper, we propose a syntactically robust training framework that enables models to be trained on a syntactic-abundant distribution based on diverse paraphrase generation. To tackle the intrinsic problem of knowledge deformation of paraphrasing, two algorithms based on semantic similarity matching and syntactic tree walking are used to restore the expressionally transformed knowledge. The training framework can be generally applied to other syntactic partial observable domains. Based on the proposed framework, we build a new evaluation set called CaRB-AutoPara, a syntactically diverse dataset consistent with the real-world setting for validating the robustness of the models. Experiments including a thorough analysis show that the performance of the model degrades with the increase of the difference in syntactic distribution, while our framework gives a robust boundary. The source code is publicly available at https://github.com/qijimrc/RobustOIE.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>



- **Ji Qi**, Bin Xu, Kaisheng Zeng, Jinxin Liu, Jifan Yu, Qi Gao, Juanzi Li, Lei Hou. &ensp; *ConstGCN: Constrained Transmission-based Graph Convolutional Networks for Document-level Relation Extraction.* [[arxiv](https://arxiv.org/abs/2210.03949)]
    <details>
    <summary>Summary</summary>
    Document-level relation extraction with graph neural networks faces a fundamental graph construction gap between training and inference - the golden graph structure only available during training, which causes that most methods adopt heuristic or syntactic rules to construct a prior graph as a pseudo proxy. In this paper, we propose ConstGCN, a novel graph convolutional network which performs knowledge-based information propagation between entities along with all specific relation spaces without any prior graph construction. Specifically, it updates the entity representation by aggregating information from all other entities along with each relation space, thus modeling the relation-aware spatial information. To control the information flow passing through the indeterminate relation spaces, we propose to constrain the propagation using transmitting scores learned from the Noise Contrastive Estimation between fact triples. Experimental results show that our method outperforms the previous state-of-the-art (SOTA) approaches on the DocRE dataset.
    <!-- <pre><center><img src="/images/ROBUST.png" width="90%"></center></pre> -->
    </details>


