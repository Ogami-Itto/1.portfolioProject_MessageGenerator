import pandas as pd

df = pd.read_excel('ressources/liste_frequence_des_mots_132918_292375.xlsx')
print(df.head())

# get a list of all the types of words. it will be used for filtering
nature = df['Nature'].unique()

print(nature)

# create the individual arrays.
df_deter = df[df['Nature'] == nature[0]].reset_index()
df_prep = df[df['Nature'] == nature[1]].reset_index()
df_conj = df[df['Nature'] == nature[2]].reset_index()
df_verb = df[df['Nature'] == nature[3]].reset_index()
df_pron = df[df['Nature'] == nature[4]].reset_index()
df_adv = df[df['Nature'] == nature[5]].reset_index()
df_adj = df[df['Nature'] == nature[6]].reset_index()
df_subs = df[df['Nature'] == nature[7]].reset_index()
df_numer = df[df['Nature'] == nature[8]].reset_index()
df_inter = df[df['Nature'] == nature[9]].reset_index()

#print(df_deter)

# Export arrays to JS and rename files as variables:
# example of how renaming can be achieved. link : https://stackoverflow.com/questions/11676458/how-do-i-name-a-file-by-a-variable-name-in-python

df_deter.to_json('outputJson/df_deter.json')

def get_var_name(var):
    for name, value in globals().items():
        if value is var:
            return name
        
print(get_var_name(df_deter))

df_deter.to_json('outputJson/{}.txt'.format(get_var_name(df_deter)))

arrayOfTypes = [df_deter,df_prep,df_conj,df_verb,df_pron,df_adv,df_adj,df_subs,df_numer,df_inter]

for wordType in arrayOfTypes:
    wordType.to_json('outputJson/{}.json'.format(get_var_name(wordType)))