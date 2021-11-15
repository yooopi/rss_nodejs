/*

1. Принимает на вход 3 аргумента:
    конфиг -c --config C1 C0 R1 R0 A   "C1-C1-R0-A" // преобразовать конфиг в пайплайн из стримов
    -i --input +
    -o --output +
2. Аргумент конфига обязательный и должен валидироваться +
    если передан кривой конфиг, то выдавать human friendly ошибку через stderr и завершить процесс с ненулевым кодом +
    если передано 2 одинаковых аргумента, то обработать как ошибку выше +
    реализацию валидации посмотреть в критериях проверки +
    порядок передачи аргументов не должен влиять на работу
3. Если не переданы аргументы input и (или) output, то использовать stdin и stdout
    если переданный input/output недоступны или отсутствуют, то выдавать human friendly ошибку через stderr и завершить процесс с ненулевым кодом
4. Кодировать и декодировать только буквы английского алфавита, остальное не трогать +
5. Использовать стримы для чтения и записи
    Каждый шифр должен быть реализован в виде трансформ стрима
    Стримы должны быть соединены через pipe в той же последовательности, что и передан конфиг
    При работае с stdin кодирование/декодирование должно отрабатывать сразу после ввода информации в консоль
6. При записи в файл не стирать исходный текст. Просто добавлять новый
7. Реализовать кастомные стримы на чтение и запись (статья на хабре про стримы)
8. Использовать пользовательские ошибки и обрабатывать их для передачи в stderr
9. Сделать readme, желательно на английском

*/
const argvParser = require("./utils/argumentsParser");

const args = argvParser();

console.log("PARSED ARGUMENTS: ", args);

// Get array of ciphers from args.config
// Create array of streams from config
// Put ...array into pipeline