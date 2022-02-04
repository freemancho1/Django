from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

lexers = [item for item in get_all_lexers() if item[1]]
languages = sorted([(item[1][0], item[0]) for item in lexers])
styles = sorted([(item, item) for item in get_all_styles()])

print(f'lexers size: {len(lexers)}\nlanguages size: {len(languages)}\n'
      f'styles size: {len(styles)}')

for item in lexers:
      print(item)
      
for item in languages:
      print(item)
      
print('=======================================')
for item in styles:
      print(item)      