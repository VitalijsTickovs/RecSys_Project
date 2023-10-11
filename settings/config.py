dataset_folder = "ml-1m" #"ml-1m"  
preprocessed_dataset_folder = "preprocessed_dataset" 

# Preprocessing
min_ratings_per_user = 100
min_ratings_per_item = 100

# Group generation settings
group_sizes_to_create = [4] # [2, 3, 4, 5, 6, 7, 8]
group_similarity_to_create = ["RANDOM", "SIMILAR_ONE_DIVERGENT"]
group_number = 20
similar_threshold = 0.3
dissimilar_threshold = -0.1
shared_ratings = 5

# Evaluation settings
# group_types = "SYNTHETIC"  # (only "SYNTHETIC" available for ml1m)
# evaluation_ground_truth = "USER_RATINGS" # "GROUP_CHOICES", "USER_SATISFACTION" # (only "USER_RATINGS" available for ml1m)
# group_sizes_to_test = [4]
# group_similarity_to_test = ["RANDOM", "SIMILAR_ONE_DIVERGENT"] #["RANDOM", "SIMILAR", "DIVERGENT", "SIMILAR_ONE_DIVERGENT"]
# individual_rs_strategy = "LENSKIT_CF_ITEM"  # the used strategy for individual RS
# aggregation_strategies = ["BASE", "GFAR", "EPFuzzDA"]  # ["BASE", "GFAR", "EPFuzzDA"] list of implemented aggregation strategies we want to test
# recommendations_number = 20  # number of recommended items
# individual_rs_validation_folds_k = 0 #validation fold for training hyperparameters of individual RS
#
# evaluation_strategy = "COUPLED"  # "COUPLED", "DECOUPLED" evaluation type (see https://dl.acm.org/doi/10.1145/3511047.3537650)
#
# inverse_propensity_debiasing = False #For COUPLED only: True / False whether to normalize feedback with self-normalized inverse propensity score (see https://dl.acm.org/doi/10.1145/3511047.3537650)
# inverse_propensity_gamma = 0.1 #gamma parameter of the inverse propensity weighting. Larger values indicate more penalization for popular items
#
# binarize_feedback = False #True / False whether to binarize user feedback for the evaluation
# binarize_feedback_positive_threshold = 4.0 # if the feedback should be binarized, this denotes the minimal positive value
#
# feedback_polarity_debiasing = -3.0 #polarity debiasing parameter c from https://dl.acm.org/doi/10.1145/3511047.3537650 usage: rating = max(0, rating+c)
#
# metrics = ["NDCG","BINARY"]  # list of implemented metrics to evaluate
