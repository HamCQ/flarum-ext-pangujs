<?php

/*
 * This file is part of hamcq/pangujs.
 *
 * Copyright (c) 2023 Emin.lin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace HamCQ\PanGuJs;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings())
        ->serializeToForum('contentPanguJs', 'contentPanguJs', 'boolVal'),
    (new Extend\User())
        ->registerPreference('panguJsEnable', 'boolVal', false)
];
