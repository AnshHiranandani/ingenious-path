import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import pickle

# Sample data for training
data = {
    'current_field': ['mechanical', 'electrical', 'civil', 'software', 'aerospace'],
    'desired_field': ['electrical', 'mechanical', 'software', 'civil', 'mechanical'],
    'advice': [
        'Learn basic electrical engineering concepts and tools. Consider taking courses in electrical circuits and systems.',
        'Understand mechanical systems and tools. Gain hands-on experience with mechanical projects.',
        'Learn programming and software development. Take courses in computer science and software engineering.',
        'Understand civil engineering principles and materials. Take courses in structural analysis and design.',
        'Learn basic mechanical engineering concepts and tools. Consider taking courses in mechanical design and analysis.'
    ]
}

# Create DataFrame
df = pd.DataFrame(data)

# Feature extraction
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['current_field'] + ' ' + df['desired_field'])
y = df['advice']

# Train the model
model = RandomForestClassifier()
model.fit(X, y)

# Save the model and vectorizer
with open('career_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)
with open('vectorizer.pkl', 'wb') as vectorizer_file:
    pickle.dump(vectorizer, vectorizer_file)