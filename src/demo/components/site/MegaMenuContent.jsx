import { ChevronDown } from 'lucide-react';

export default function MegaMenuContent({
  menuKey,
  groups,
  expanded,
  onExpand,
  dark = false,
  onItemClick,
}) {
  const menuConfig = {
    Generator: { max: 6, flat: false, columns: 'grid-cols-2', expandLabel: 'See all generators' },
    Tools: { max: 8, maxPerGroup: 4, flat: false, columns: 'grid-cols-2', expandLabel: 'See all tools' },
    Models: { max: 8, maxPerGroup: 4, flat: false, columns: 'grid-cols-2', expandLabel: 'See all models' },
    Templates: { max: 8, maxPerGroup: 4, flat: false, columns: 'grid-cols-2', expandLabel: 'See all templates' },
    Blog: { max: 4, flat: false, columns: 'grid-cols-1', expandLabel: 'See all posts' },
  }[menuKey];
  const isManagedMenu = !!menuConfig;
  const allItems = isManagedMenu ? groups.flatMap((group) => group.items) : [];
  const shouldShowExpand = isManagedMenu && !expanded && allItems.length > menuConfig.max;

  const visibleFlatItems = isManagedMenu
    ? (expanded ? allItems : allItems.slice(0, menuConfig.max))
    : [];

  const visibleGroups = isManagedMenu && !menuConfig.flat
    ? (menuConfig.maxPerGroup && !expanded
        ? groups.map((group) => ({ ...group, items: group.items.slice(0, menuConfig.maxPerGroup) }))
        : groups.reduce((acc, group) => {
            const used = acc.reduce((sum, current) => sum + current.items.length, 0);
            const remaining = expanded ? group.items.length : menuConfig.max - used;
            if (remaining <= 0) return acc;
            acc.push({ ...group, items: group.items.slice(0, remaining) });
            return acc;
          }, []))
    : groups;

  return (
    <div className={isManagedMenu ? 'relative flex h-[232px] w-full flex-col' : 'w-full'}>
      {menuConfig?.flat ? (
        <div className={expanded ? 'max-h-[178px] overflow-y-auto pr-3' : undefined}>
          <ul className={`grid ${menuConfig.columns} gap-x-12 gap-y-2`}>
            {visibleFlatItems.map((item) => (
              <li key={item.label} className="min-w-0">
                <a
                  href={item.href}
                  onClick={(event) => onItemClick?.(event, item)}
                  className={`block py-1.5 text-[15px] font-medium transition-colors ${
                    dark ? 'text-white/80 hover:text-white' : 'text-gray-800 hover:text-kiwi-green-dark'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={isManagedMenu && expanded ? 'max-h-[178px] overflow-y-auto pr-3' : undefined}>
          <div className={`grid gap-12 ${menuConfig?.columns || (groups.length === 1 ? 'grid-cols-1' : 'grid-cols-2')}`}>
            {visibleGroups.map((group, groupIndex) => (
              <div key={group.title} className="min-w-0">
                <h4 className={`mb-4 text-center text-[11px] font-bold uppercase tracking-[0.16em] ${dark ? 'text-gray-400' : 'text-gray-400'}`}>
                  {group.title}
                </h4>
                <ul className="flex flex-col items-center gap-1">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(event) => onItemClick?.(event, item)}
                        className={`block py-1.5 text-center text-[15px] font-medium transition-colors ${
                          dark ? 'text-white/80 hover:text-white' : 'text-gray-800 hover:text-kiwi-green-dark'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  {shouldShowExpand && menuKey === 'Models' && groupIndex === 0 && (
                    <li className="pt-2">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          onExpand?.();
                        }}
                        className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-bold shadow-sm transition ${
                          dark
                            ? 'border-white/10 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                            : 'border-gray-200 bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900'
                        }`}
                      >
                        {menuConfig.expandLabel}
                        <ChevronDown size={15} />
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {shouldShowExpand && menuKey !== 'Models' && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onExpand?.();
          }}
          className={`mt-auto flex items-center gap-1.5 self-start pt-6 text-sm font-bold transition ${
            dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {menuConfig.expandLabel}
          <ChevronDown size={15} />
        </button>
      )}
    </div>
  );
}
