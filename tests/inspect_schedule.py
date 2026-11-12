with open('css/style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'schedule-table-rows' in l or 'schedule-row' in l:
        for j in range(max(0, i-2), min(len(lines), i+35)):
            print(f'{j+1}: {lines[j]}', end='')
        print('='*50)
