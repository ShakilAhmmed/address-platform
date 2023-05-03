<?php

$finder = Symfony\Component\Finder\Finder::create()
    ->in([
        __DIR__,
        __DIR__ . '/tests',
    ])
    ->exclude(['vendor'])
    ->exclude(['app'])
    ->exclude(['database'])
    ->exclude(['config'])
    ->exclude(['bootstrap'])
    ->exclude(['storage'])
    ->exclude(['public'])
    ->name('*.php')
    ->notName('*.blade.php')
    ->notName('_ide_helper.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR2' => true,
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'],
        'ordered_imports' => ['sort_algorithm' => 'alpha'],
        'no_unused_imports' => true,
        'not_operator_with_successor_space' => true,
        'trailing_comma_in_multiline' => true,
        'phpdoc_scalar' => true,
        'blank_line_after_namespace' => true,
        'blank_line_after_opening_tag' => true,
        'braces' => true,
        'cast_spaces' => true,
        'unary_operator_spaces' => true,
        'binary_operator_spaces' => true,
        'blank_line_before_statement' => [
            'statements' => ['break', 'continue', 'declare', 'return', 'throw', 'try'],
        ],
        'phpdoc_single_line_var_spacing' => true,
        'phpdoc_var_without_name' => true,
        'class_attributes_separation' => [
            'elements' => [
                'method' => 'one',
            ],
        ],
        'method_argument_space' => [
            'on_multiline' => 'ensure_fully_multiline',
            'keep_multiple_spaces_after_comma' => true,
        ],
        'visibility_required' => [
            'elements' => ['method', 'property'],
        ],
        'single_trait_insert_per_statement' => true,
        'declare_equal_normalize' => true,
        'full_opening_tag' => true,
        'fully_qualified_strict_types' => true, // added by Shift
        'function_declaration' => true,
    ])
    ->setFinder($finder);
